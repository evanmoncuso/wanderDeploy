const express = require('express');
const bp = require('body-parser');
const path = require('path');

const userRouter = require('./routes/userRouter');
const itemRouter = require('./routes/itemRouter');

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// send the static client homepage?
app.use(express.static(path.join(__dirname, '../client')));


let port = process.env.port || 1024;

app.use('/users', userRouter);
app.use('/items', itemRouter);

//send that damn favicon
app.get('/favicon.ico', (req, res) => {
  res.send('../favicon.ico');
})

app.get('/', (req, res) => {
  console.log('incoming from:', req.url);
  res.send('Hello');
});

app.get('/test', (req, res) => {
  console.log('incoming from:', req.headers);
  res.send(req.headers);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('package received');
})

app.listen(port, () => {
  console.log('Listening on ', port);
});
