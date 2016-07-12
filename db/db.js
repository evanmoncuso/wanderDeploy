const mysql = require('mysql');
const Promise = require('bluebird');

let connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'wander'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  }
  console.log('success!');
  console.log('Connected on thread: ', connection.threadId);
});

exports.connection = connection;
// data = object
// table = string
exports.pQueryInsert = (data, table) => {
  return new Promise( (resolve, reject) => {
    connection.query('INSERT INTO ' + table + ' SET ?', data, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log('successfully inserted into db');
    })
  });
}

exports.pQueryGet = (table, callback) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ' + table, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  });
}


exports.pQueryCheckLogin = (username, callback) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT password FROM users WHERE username = "' + username + '"', (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  });
}

exports.pGetAllUsersOwnedItems = (username, callback) => {
  this.pGetUserIdFromName(username, (userId) => {
    connection.query('SELECT itemname FROM items WHERE owner = '+ userId, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    })
  });
};

// exports.pGetUserIdFromName = (username) => {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT userId FROM users WHERE username = "' + username +'"', (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// }

exports.pGetUserIdFromName = (username) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT userId FROM users WHERE username = "' + username +'"', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

exports.pGetUserOwnedItems = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT itemname FROM items WHERE owner = '+ userId, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })
};
