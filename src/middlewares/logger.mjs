const logger = (req, res, next) => {
  // console.log('Logger', req.method, req.path);
  // console.log('entry_id', req.params.id);
  next();
};

export default logger;
