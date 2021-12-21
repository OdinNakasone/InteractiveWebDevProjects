const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

app.get('/api', routes.api);

app.listen(3000);
