const express = require("express");
const dotenv = require("dotenv");
const requestLoggerMiddleware = require("./middleware/logging.middleware");

dotenv.config();

const app = express();
app.use(requestLoggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
