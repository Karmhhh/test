const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();
const path = require('path');
const api = require('./api');

const middlewares = require('./middlewares');

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
// sendFile will go here
app.get('/Auth/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/login/index.html'));
});

app.use('/Auth', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
