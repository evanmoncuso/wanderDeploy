const express = require('express');
const services = require('./../services');
const db = require('./../../db/db');

let router = express.Router();

router.get('/all', (req, res) => {
  db.pQueryGet('items', (data) => {
    res.send(data);
  })
});

router.get('/*', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  db.pGetUserIdFromName(username, (userId) => {
    console.log(userId);
    userId = userId[0].userId;
    db.pGetUserOwnedItems(userId, (data) => {
      console.log('from 20', data);
      res.send(data);
    })
  });
});

router.post('/*', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  let item = req.body.item;
  db.pGetUserIdFromName(username, (userId) => {
    userId = userId[0].userId;
    let object = {
        itemId: null,
        itemname: item,
        owner: userId,
        lentTo: null,
      };
    db.pQueryInsert(object, 'items');
    res.send('success!');
  });
});

module.exports = router;
