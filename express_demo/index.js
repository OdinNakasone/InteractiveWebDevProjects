const express = require('express');
const routes = require('./routes/routes')
const app = express();

app.get('/', routes.index);
app.get('/potato', routes.potato);
app.get('/hello', routes.hello);
app.get('/goodbye/:name', routes.goodbye);

app.listen(3000);