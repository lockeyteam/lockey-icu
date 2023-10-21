export default async (req, context) => {
  // function logic
  return {
    statusCode: 200, 
    body: {
      "m.server": "neo.lockey.icu:443" 
    }
  }
}

export const config = {
  path: "/.well-known/matrix/server" 
};
