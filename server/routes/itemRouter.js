const express = require('express');

let router = express.Router();

router.get('/*', (req, res) => {
  console.log('hit on item');
  res.send('received at item Router');
});

router.post('/*', (req, res) => {
  console.log('hit on item');
  console.log(req.body);
  res.send('Here are some items');
});

module.exports = router;
