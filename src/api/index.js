const express = require('express');

const tok = require('./tok');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/Auth', tok);

module.exports = router;
