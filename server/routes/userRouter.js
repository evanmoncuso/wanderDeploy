const express = require('express');
const db = require('./../../db/db');
const url = require('url');
const services = require('./../services')


let router = express.Router();

router.get('/password', (req, res) => {
  let query = url.parse(req.url, true).query;

  // does the username exist at all?
  db.pQueryCheckLogin(query.username, (data) => {
    if (data.length === 0) {
      data = undefined;
    } else {
      data = data[0];
    }
    console.log(query.password);
    console.log(data.password);

    console.log(services.compare(query.password, data.password));
  });



})

router.get('/*', (req, res) => {
  res.send('received at user Router');
});

router.post('/*', services.crypt, (req, res) => {
  let bodyData = req.body;

  bodyData = services.dbDataValidate(bodyData);

  db.pQueryInsert(bodyData, 'users');
  res.send('new user ' + bodyData.username + ' has been created.');
});

module.exports = router;
