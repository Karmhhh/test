const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const login = require('./login');
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
  });
});
// app.get('/login', function(req, res) {
//   res.send(login);
// });
app.use('/Auth', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
