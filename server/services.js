const bcrypt = require('bcrypt');
const secret = require('./secrets');
const jwt = require('jwt-simple');

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
};

let genToken = (user, res) => {
  // create the token based on our user's name and our secret phrase!
  let token = jwt.encode(user, secret.secret);
  console.log(token);
  res.send(token);
};

let hasToken = () => {
  // is there a token in the local storage from us?
 return !!$window.localStorage.getItem('com.wander');
};

let dbDataValidate = (data) => {
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
  compare: compare,
  genToken: genToken,
  hasToken: hasToken
};
