const express = require('express');
const bp = require('body-parser');
const userRouter = require('./routes/userRouter');
const itemRouter = require('./routes/itemRouter');

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

let port = process.env.port || 1024;

app.use('/users', userRouter);
app.use('/items', itemRouter);


app.get('/*', (req, res) => {
  console.log('incoming from:', req.url);
  res.send('Hello');
});

app.post('/*', (req, res) => {
  console.log(req.body);
  res.send('package received');
})

app.listen(port, () => {
  console.log('Listening on ', port);
});
