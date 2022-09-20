'use strict';

module.exports = function (req, res, next) {
  res.status(404).send({
    error: 404,
    route: req.originalUrlm,
    message: 'Not found',
  });
};