export default async () => {

  const body = JSON.stringify({
    "m.server": "neo.lkt.icu:443" 
  });

  return new Response(body, {
    headers: { 'Content-Type': 'application/json' }
  });

};

export const config = {
  path: "/.well-known/matrix/server" 
};
