const express = require('express');
const services = require('./../services');
const db = require('./../../db/db');

let router = express.Router();

router.get('/*', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  db.pGetUserIdFromName(username, (userId) => {
    userId = userId[0].userId;
    db.pGetUserOwnedItems(userId, (data) => {
      console.log('13', data);
      res.send(data);
    })
  });
});

router.post('/*', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  let item = req.body.item;
  console.log('line 21', username, item);
  // // from here
  // // take the item, add it to the database
  // db.pGetUserIdFromName(username)
  // .then((data) => {
  //   let userId = data[0].userId;
  //   let object = {
  //       itemId: null,
  //       itemname: item,
  //       owner: userId,
  //       lentTo: null,
  //     };
  //     console.log(object);
  //   db.pQueryInsert(object, 'items');
  //   res.send('success!');
  // });
  // console.log('success! outside');
});

module.exports = router;
