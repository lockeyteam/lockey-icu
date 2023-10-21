exports.handler = async function() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      "m.server": "neo.lockey.icu:443"
    })
  }
}
