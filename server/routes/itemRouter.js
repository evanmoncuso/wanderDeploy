const express = require('express');
const services = require('./../services');
const db = require('./../../db/db');

let router = express.Router();

router.get('/all', (req, res) => {
  db.pQueryGet('items', (data) => {
    res.send(data);
  })
});

router.get('/mine', (req, res) => {
  let token = req.headers['x-access-token'];
  console.log('hit at lent')
  let username = services.decodeToken(token);
  db.pGetUserIdFromName(username, (userId) => {
    userId = userId[0].userId;
    db.thingsIAmBorrowing(userId, (data) => {
      res.send(data);
    });
  });
});

router.get('/*', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  db.pGetUserIdFromName(username, (userId) => {
    userId = userId[0].userId;
    db.pGetUserOwnedItems(userId, (data) => {
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

// router.delete('/', (req, res) => {
//   let token = req.headers['x-access-token'];
//   let username = services.decodeToken(token);
//   let item = req.body.item;
//   db.pGetUserIdFromName(username, (userId) => {
//     let query = 'DELETE FROM items WHERE itemname = "' + item.itemname +'"';
//     let check = 'SELECT owner FROM items WHERE itemname = "' + item.itemname +'"';
//     db.connection.query(check, (response) => {
//       console.log(response);
//     })
//     res.send('okay');
//   });
// });

router.put('/take', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  db.pGetUserIdFromName(username, (data) => {
    userId = data[0].userId;
    itemId = req.body.item.itemId;
    db.lendTo(userId, itemId, (result) => {
      res.send('lent');
    });
  });
})

router.put('/return', (req, res) => {
  let token = req.headers['x-access-token'];
  let username = services.decodeToken(token);
  db.pGetUserIdFromName(username, (data) => {
    userId = data[0].userId;
    itemId = req.body.item.itemId;
    db.lendTo(null, itemId, (result) => {
      res.send('returned');
    });
  });
})

module.exports = router;
