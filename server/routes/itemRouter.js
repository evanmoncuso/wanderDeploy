const express = require('express');
const services = require('./../services');
const db = require('./../../db/db');

let router = express.Router();

router.get('/*', (req, res) => {
  res.send('received at item Router');
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  db.pGetAllUsersOwnedItems(username, (data) => {
    console.log(data);
  });
  res.send('okay');
});

router.post('/*', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  let item = req.body.item;
  console.log('line 21', username, item);
  // from here
  // take the item, add it to the database
  db.pGetUserIdFromName(username)
  .then((data) => {
    let userId = data[0].userId;
    let object = {
        itemId: null,
        itemname: item,
        owner: userId,
        lentTo: null,
      }
    db.pQueryInsert(object, 'items');
    res.send('success!');
  });
  console.log('success! outside');
});

module.exports = router;
