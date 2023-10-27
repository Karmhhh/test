const express = require('express');

// const tok = require('./tok');
const sleep = async (milliseconds) => {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    status: '200, ok',
  });
  await sleep(5000);
  res.redirect('/Auth/login');
});

// router.use('/Auth', tok);

module.exports = router;
