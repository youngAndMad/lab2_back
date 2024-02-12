const requestLoggerMiddleware = (req, res, next) => {
  const startTime = Date.now();

  next();

  const endTime = Date.now();
  const executionTime = endTime - startTime;

  console.log(
    `Completed api request ${req.method} ${req.url} execution ${executionTime}ms`
  );
};

module.exports = requestLoggerMiddleware;
