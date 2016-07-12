const bcrypt = require('bcrypt');

let crypt = (req, res, next) => {
  // lets make that password just way better
  let oldPassword = req.body.password;

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(oldPassword, salt);
  let autohash = bcrypt.hashSync(oldPassword, 10);

  req.body.password = hash;
  req.body.salt = salt;
  next();
};

let compare = (incoming, stored) => {
  return bcrypt.compareSync(incoming, stored);
}

let dbDataValidate = (data) => {
  // maybe eventually getting something in here to validate the username does not exist would be a good idea!
  if (data.username === undefined) {
    throw 'username cannot be undefined';
  } else if (data.password === undefined) {
    throw 'password cannot be undefined';
  } else if (data.salt === undefined) {
    throw 'no salt!';
  }

  data.userId = null;
  data.firstname = data.firstname || 'blank';
  data.lastname = data.lastname || 'blank';

  return data;
}

module.exports = {
  crypt: crypt,
  dbDataValidate: dbDataValidate,
  compare: compare
};
