const express = require('express');

let router = express.Router();

router.get('/*', (req, res) => {
  console.log('hit on user');
  res.send('received at user Router');
});

router.post('/*', (req, res) => {
  console.log('hit on user');
  console.log(req.body);
  res.send('Here are some users');
});

module.exports = router;
