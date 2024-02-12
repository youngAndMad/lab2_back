const authenticate = require("../provider/auth.provider");

const basicAuth = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    req.headers.authorization.indexOf("Basic ") === -1
  ) {
    return res.status(401).json({ message: "Missing Authorization Header" });
  }

  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");
  const user = await authenticate({ username, password });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Invalid Authentication Credentials" });
  }

  req.user = user;

  next();
};

module.exports = basicAuth;
