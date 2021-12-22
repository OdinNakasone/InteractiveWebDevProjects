const express = require('express');
const pug = require('pug');
const path = require('path')
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let urlEnocdedParser = bodyParser.urlencoded({
  extended: true
});

app.get('/', routes.index);
app.get('/create', routes.create);
app.post('/create', urlEnocdedParser, routes.createPerson);
app.get('/edit/:id', routes.edit);
app.post('/edit/:id', urlEnocdedParser, routes.editPerson);
app.get('/delete/:id', routes.delete);
app.get('/details/:id', routes.details);
app.get('/db_fun', routes.db_fun);

app.listen(3000);