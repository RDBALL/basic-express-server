'use strict';

module.exports = function (req, res, next) {
  let { name } = req.query;
  let nameObj = {
    name: name,
  };
  res.status(200).send(nameObj);
};