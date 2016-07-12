const express = require('express');
const db = require('./../../db/db');
const url = require('url');
const services = require('./../services');


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
    if (data === undefined) {
      res.json(false);
    } else {
      let valid = services.compare(query.password, data.password);
      services.genToken(query.username, res);
    }
  });
})

router.get('/*', (req, res) => {
  res.send('received at user Router');
});

router.post('/*', services.crypt, (req, res) => {
  let bodyData = req.body;
  // make sure all incoming user data objects are in good shape
  bodyData = services.dbDataValidate(bodyData);
  // submit our new user!
  db.pQueryInsert(bodyData, 'users');
  // send a response saying things are okay
  res.send('new user ' + bodyData.username + ' has been created.');
});

module.exports = router;
