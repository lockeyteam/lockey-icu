
> 此仓库存放 https://lkt.icu 的源代码，使用 nft.storage 进行持续集成&交付 Matrix-Clients


---

## Based on:

**Stone: Astro Theme**
https://github.com/m6v3l9/astro-theme-stone

## Getting Started

### Requirements

- Basic knowledge of Astro, HTML and CSS.
- Text editor (We recommend Visual Studio Code)
- Node.js 18 or higher.

### Install dependencies

Navigate to your project folder and install its dependencies:

```
npm install
```

### Start

Once the installation is done, you can now run your app:

```
npm run dev
```

This runs the app in development mode. Open <http://localhost:3000> to view it in the browser.

### Build

```
npm run build
```

This builds the app for production to the `./dist/` folder.

## Project Structure

Inside the project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── .prettierrc
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

- `public/*` - Any static assets (images, fonts, icons, ...)
- `src/*` - Project source code (components, pages, ...)
- `src/components/*` - Reusable Astro components used to build pages.
- `src/layouts/*` - Astro components that define the UI structure shared by one or more pages..
- `src/pages/*` - Astro components used to create new pages on your site. Each page is exposed as a route based on its file name.
- `.prettierrc` - Prettier configuration file.
- `astro.config.mjs` - Astro configuration file.
- `package.json` - File used by JavaScript package managers to manage your dependencies. It also defines the scripts that are commonly used to run Astro.
- `tailwind.config.cjs` - Tailwind configuration file. The theme section is where you define your color palette and fonts.
- `tsconfig.json` - TypeScript configuration file.

## Deployment

Ready to build and deploy your site? Follow the [official documentation](https://docs.astro.build/en/guides/deploy/).

## Support

If you have any questions or suggestions do not hesitate to contact me.

## License

This project is licensed under the terms of the MIT license.
