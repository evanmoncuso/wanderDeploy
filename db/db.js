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
  connection.query('SELECT * FROM ' + table, (err, result) => {
    if (err) {
      console.log(err);
    }
    callback(result);
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
  connection.query('SELECT * FROM items WHERE owner = '+ userId, (err, result) => {
    if (err) {
      throw err;
    }
    callback(result);
  });
};

exports.pGetUserIdFromName = (username, callback) => {
  connection.query('SELECT userId FROM users WHERE username = "' + username +'"', (err, result) => {
    if (err) {
      throw err;
    }
    callback(result);
  });
};

exports.pGetUserOwnedItems = (userId, callback) => {
  connection.query('SELECT * FROM items WHERE owner = ' + userId, (err, result) => {
    if (err) {
      throw err;
    }
    callback(result);
  });
}

exports.getUsernameFromId = (userId) => {

}
