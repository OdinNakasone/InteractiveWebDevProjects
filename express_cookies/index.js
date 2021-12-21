const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('whatever'));

let myString = 'Bob';
let visited = 0;

app.get('/', (req ,res) => {
  visited++;
  res.cookie('visited', visited, {maxAge: 999999999999999999999999});

  res.cookie('stuff', myString, {maxAge: 99999999999999999});

  if(req.cookies.beenToSiteBefore == 'yes'){
    res.send(`You have been here ${req.cookies.visited} times before`)
  } else{
    res.cookie('beenToSiteBefore', 'yes', {maxAge: 999999999999});
    res.send("this is your first time here");
  }
});

app.listen(3000);