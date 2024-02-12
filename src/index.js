const express = require("express");
const dotenv = require("dotenv");
const requestLoggerMiddleware = require("./middleware/logging.middleware");
const errorHandlerMiddleware = require("./middleware/error-handler.middleware");

dotenv.config();

const app = express();
app.use(requestLoggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/error", (req, res) => {
  throw new Error("haahahahahahha");
});

const PORT = process.env.PORT || 3000;
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
