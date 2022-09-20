'use strict';

function validateQuery(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('⛔ valid query parameter required 👉 example  .../person?name=Robert');
  } else {
    console.log('name: ', name);
  }
  next();
}

module.exports = validateQuery;