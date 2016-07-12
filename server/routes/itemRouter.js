const express = require('express');
const services = require('./../services');
const db = require('./../../db/db');

let router = express.Router();

router.get('/*', (req, res) => {
  res.send('received at item Router');
});

router.post('/*', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  let item = req.body.item;
  console.log('username:',username);
  // from here
  // take the item, add it to the database
  db.pGetUserIdFromName(username, (data) => {
    let userId = data[0].userId;
    let object = {
        itemId: null,
        itemname: item,
        owner: userId,
        lentTo: null,
      }
    db.pQueryInsert(object, 'items');

  });
  // {
  //   itemId: null,
  //   itemname: req.body.item,
  //   owner: username,
  //   lentTo: null,
  // }
});

module.exports = router;
