const path = require("path");
const lti = require("ltijs").Provider;
const isDev = process.env.NODE_ENV !== "production";
const publicPath = path.join(__dirname, "public");

lti.setup(
  process.env.LTI_KEY,
  { url: process.env.MONGODB_URI },
  {
    staticPath: publicPath,
    cookies: { secure: !isDev, sameSite: isDev ? "Lax" : "None" },
    devMode: isDev,
  }
);

lti.onConnect((token, req, res) => res.send("LTI Tool Launched"));

lti.onDeepLinking((token, req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

lti.app.post("/deeplink", async (req, res) => {
  const { title, url } = req.body;

  const items = [
    {
      type: "image",
      url,
      title,
      text: title,
      thumbnail: url,
      width: 600,
      height: 400,
    },
  ];

  const form = await lti.DeepLinking.createDeepLinkingMessage(
    res.locals.token,
    items,
    { message: "Successfully registered resource!" }
  );
  return res.send(form);
});

const start = async () => {
  await lti.deploy({ port: process.env.PORT || 3000 });
  await lti.registerPlatform({
    url: process.env.PLATFORM_URL,
    name: "Brightspace",
    clientId: process.env.CLIENT_ID,
    authenticationEndpoint: process.env.AUTH_URL,
    accesstokenEndpoint: process.env.TOKEN_URL,
    authConfig: { method: "JWK_SET", key: process.env.KEYSET_URL },
  });
};
start();
