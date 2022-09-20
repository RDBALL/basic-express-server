'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const person = require('./modules/person');
const errorNotFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

require('dotenv').config();

const PORT = process.env.PORT || 3003;

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('👍 Server is running for RDBALL Code 401d48 Lab02.  👉 visit.../person?name=Robert for proof of functionality');
});

app.get('/person', validator, person);

app.use('*', errorNotFound);

app.use(serverError);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {app,start};