#!/bin/bash

# 检查是否已经安装了 jq
if ! command -v jq &> /dev/null
then
    echo "jq could not be found, installing..."
    sudo apt-get update && sudo apt-get install jq -y
fi

# 检查是否已经安装了 ipfs-car
if ! command -v ipfs-car &> /dev/null
then
    echo "ipfs-car could not be found, installing..."
    npm i ipfs-car -g
fi

# 检查是否已经安装了 carbites-cli
if ! command -v carbites-cli &> /dev/null
then
    echo "carbites-cli could not be found, installing..."
    npm i carbites-cli -g
fi

# 设置环境变量
shopt -s nullglob
if [ -z "$NFT_APIKEY" ]; then 
    echo "NFT_APIKEY is not set"; 
    exit 1; 
fi

# 获取 SchildiChat 桌面端的 release 信息

for keyword in "_Setup_" "_win-portable_" ".AppImage" ".dmg"; do
    urls=$(curl -s https://api.github.com/repos/SchildiChat/schildichat-desktop/releases | jq -r --arg keyword "$keyword" '.[].assets[] | select(.browser_download_url | contains($keyword)) | .browser_download_url')
    for url in $urls; do
        if [[ $url != "null" ]]; then
            filename=$(basename $url)
            version=$(echo $filename | grep -oP '(?<=SchildiChat-)[^-]*')
            if [[ $version != v* ]]; then
                version="v${version}"
                filename=$(echo $filename | sed "s/SchildiChat-[^-]*/SchildiChat-${version}/")
            fi
            echo "Downloading $filename"
            wget -O "$filename" $url
            if [ $? -ne 0 ]; then
                echo "Failed to download $filename"
                exit 1
            fi
            echo "Downloaded $filename"
            break  # 跳出循环
        fi
    done
done

# 转换文件为 CAR
for file in *.AppImage *_Setup_*.exe *_win-portable_*.zip *.dmg *.zip; do
    ipfs-car pack "$file" --output "${file}.car"
    rm "$file"
done

# 分割大于 100MB 的 CAR 文件
for file in *.car; do
    if [ $(stat -c%s "$file") -gt 104857600 ]; then
        carbites split --size 100MB --strategy treewalk "$file"
        rm "$file"
    fi
done

# 使用 curl 命令上传 CAR 文件并解析返回的 JSON 数据
for file in *.car; do
    response=$(curl -X 'POST' \
        'https://api.nft.storage/upload' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/car' \
        -H "Authorization: Bearer $NFT_APIKEY" \
        --data-binary "@$file")
    echo "Response: $response"  # 调试语句

    cid=$(echo "$response" | jq -r '.value.cid')

    # 获取文件名，删除 .car 后缀
    original_name=$(basename "$file" .car)

    version=$(echo "$original_name" | sed -n -e 's/^.*\(_v\|-v\)\(.*\)\(\.exe\|\.zip\|\.AppImage\|\.dmg\).*$/\2/p') 

    # 获取文件名，删除 .car 或 -数字.car 后缀
    name=$(basename "$file" | sed -r 's/(-[0-9]+)?\.car$//')

    echo "CID: $cid"  # 调试语句
    echo "Name: $name"  # 调试语句
    echo "Version: $version"  # 调试语句

    echo "Waiting for 3 seconds..."
    sleep 3

    # 根据文件类型确定文件名
    case "$original_name" in
        *.AppImage*)
            filename="schildichat-linux-appimage"
            ;;
        *_Setup_*)
            filename="schildichat-windows-install"
            ;;
        *_win-portable_*)
            filename="schildichat-windows-portable"
            ;;
        *.dmg*)
            filename="schildichat-macos"
            ;;
        *)
            echo "Unknown file type: $original_name"
            exit 1
            ;;
    esac

    # 将 cid 写入到指定的 .cid 文件中
    mkdir -p cid json
    echo "$cid" > "cid/$filename.cid"

    echo "Waiting for 3 seconds..."
    sleep 3

    # 构造 JSON 数据
    json_data=$(jq -n \
        --arg name "$name" \
        --arg cid "$cid" \
        --arg version "$version" \
        '{name: $name, cid: $cid, version: $version}')

    # 如果 JSON 文件不存在，则创建一个新的 JSON 文件
    if [ ! -f "json/$filename-cid.json" ]; then
        echo '{"versions": [], "latest": {"name": "", "cid": "", "version": "latest"}}' > "json/$filename-cid.json"
    fi

    # 读取原有的 JSON 数据
    old_json_data=$(cat "json/$filename-cid.json")

    # 将新的 JSON 数据添加到 "versions" 数组中，并更新 "latest" 字段
    new_json_data=$(echo "$old_json_data" | jq -c --argjson new_data "$json_data" '.versions += [$new_data] | .latest.name = $new_data.name | .latest.cid = $new_data.cid')

    # 将新的 JSON 数据写入到 JSON 文件中
    echo "$new_json_data" > "json/$filename-cid.json"
done

rm -rf *.car