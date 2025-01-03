const notFound = (req, res, next) => {
  const base_url = process.env.BASE_URL || "http://localhost";
  const port = process.env.PORT || 3001;

  const error = new Error(`Not Found - ${base_url}:${port}${req.originalUrl}`);
  error.status = 400;
  return next(error);
};

export default notFound;
