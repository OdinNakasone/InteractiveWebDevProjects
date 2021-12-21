const express = require('express');
const expressSession = require('express-session');
const pug = require('pug');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + "/views");

const urlEncodedParser = bodyParser.urlencoded({extended: false});

const checkAuth = (req, res, next) => { 
  if(req.session.user && req.session.user.isAuthnenticated){
    next();
  } else {
    res.redirect('/');
  }
}

app.use(expressSession({
  secret: 'whatever',
  saveUninitialized: true,
  resave: true
}));

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/', urlEncodedParser, (req, res) => {
  console.log(req.body.username);
  if(req.body.username == 'user' && req.body.password == 'pass'){
    req.session.user ={
      isAuthnenticated: true,
      username: req.body.username
    }
    res.redirect('/private');
  } else{
    res.redirect('/');
  }
});

app.get('/private', checkAuth, (req, res) => {
  res.send(`
  Authorized access: Welcome ${req.session.user.username}
  <br />
  <a href='/logout'>Logout</a>
  
  `);
});

app.get('/public', (req, res) => {
  res.send(`
  This is a public page
  
  `);
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err) {
      console.log(err);
    } else{
      res.redirect('/');
    }
  })
});

app.listen(3000);

