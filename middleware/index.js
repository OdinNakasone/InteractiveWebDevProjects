const express = require('express');

const app = express();

const globalInterceptor = (req, res, next) => {
  req.fullPath = `${req.protocol}://${req.hostname}${req.originalUrl}`
  let today = new Date();
  let theTime = `${today.getHours()}:${today.getMinutes()}`;
  console.log(`My Global Interceptor has run at ${req.fullPath}`);
  console.log(`Time: ${theTime}`);
  console.log(`Method called: ${req.method}`);
  console.log(`Browser: ${req.header('user-agent')}`);
  next();
};

app.use(globalInterceptor);

const singleInterceptor = (req, res, next) => {
  console.log(`Single Interceptor has run on ${req.path}`);
  next();
};

app.get('/', (req, res) => {
  res.send(`This is my homepage`);
});

app.get('/bob', singleInterceptor, (req, res) => {
  res.send(`This is Bob's homepage`);
});

app.listen(3000);