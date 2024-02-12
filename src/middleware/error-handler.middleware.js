const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(`Error occurred: ${err.message}`);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    status: "error",
    message: err.message,
    stack: err.stack,
  });
};

module.exports = errorHandlerMiddleware;
