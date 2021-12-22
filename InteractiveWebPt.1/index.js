const express = require('express');
const pug = require('pug');
const path = require('path')
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('whatever'));

let urlencodedParser = bodyParser.urlencoded({
  extended: true
});
//check Auth in the routes
const checkAuth = (req, res, next) => {
  if(req.session.user && req.session.user.isAuthenticated) {
    next();
  } else {
    res.redirect('/');
  }
}

app.use(expressSession({
  secret: 'something',
  saveUninitialized: true,
  resave: true
}));
 
app.get("/", routes.home);
app.post('/', urlencodedParser, routes.login)
app.get('/create', routes.create);
app.post('/create', urlencodedParser, routes.createAccount);
app.get('/edit/:id', checkAuth, routes.edit);
app.post('/edit/:id', checkAuth, urlencodedParser, routes.editAccount);
app.get('/logout', routes.logout);
app.get("/api", routes.api)

app.listen(3000);
