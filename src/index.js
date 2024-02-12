const express = require("express");
const dotenv = require("dotenv");
const requestLoggerMiddleware = require("./middleware/logging.middleware");
const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const mongoose = require("mongoose");
const authRouter = require("./router/auth.router");
const bodyParser = require("body-parser");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(requestLoggerMiddleware);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
