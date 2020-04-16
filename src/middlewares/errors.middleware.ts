export const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  return res.status(statusCode).json({
    message: err.message,
    status: err.status,
    stack: err.stack,
  });
};

export const notFoundError = (req, res, next) => {
  const err: any = new Error('Not found!');
  err.status = 404;
  next(err);
};
