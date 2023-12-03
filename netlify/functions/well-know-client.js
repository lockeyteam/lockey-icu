export default async () => {

  const body = `
{
  "m.homeserver": {
    "base_url": "https://neo.lkt.icu"
  }
}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });

};

export const config = {
  path: "/.well-known/matrix/client"
};
