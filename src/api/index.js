const express = require('express');

const emojis = require('./tok');
const { token } = require('morgan');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/Auth', tok);

module.exports = router;
