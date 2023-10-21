export default async () => {

  const body = JSON.stringify({
    "m.homeserver": {
        "base_url": "https://neo.lockey.icu"
    }
});

  return new Response(body, {
    headers: { 'Content-Type': 'application/json' }
  });

};

export const config = {
  path: "/.well-known/matrix/client" 
};
