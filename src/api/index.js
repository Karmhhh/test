const express = require('express');

// const tok = require('./tok');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: '200, ok',
  });
  setInterval(() => { res.redirect('/Auth/login'); }, 5000);
});

// router.use('/Auth', tok);

module.exports = router;
