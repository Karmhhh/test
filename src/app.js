const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const cors = require('cors');

require('dotenv').config();
const path = require('path');
// const api = require('./api');

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
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/login/index.js'));
});

app.post('/auth', (req, res) => {
  // console.log('Got body:', req.body);
  res.status(200).json({ status: 'ok' });
});

// app.use('/auth', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
