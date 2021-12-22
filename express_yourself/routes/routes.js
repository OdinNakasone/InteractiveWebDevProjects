const fs = require('fs');
const config = require('../config');



exports.index = (req, res) => {
  res.render('index', {
    "title": "New iPhone 20 Levi!",
    "config": config,
    
  }) 
}

exports.orders = (req, res) => {
  res.render('orders', {
    "title": 'Would you like to order the new iPhone 20 Levi?',
    "config": config
  });
};

exports.submit = (req, res) => {
  let user = {
    firstname: req.body.fname,
    lastname: req.body.lname,
    address: req.body.address,
    phoneNum: req.body.phoneNum,
    email: req.body.email
  };

  let userData = `
  first_name: ${user.firstname}
  last_name: ${user.lastname}
  address: ${user.address}
  phone number: ${user.phoneNum}
  email: ${user.email}
  -------------------------------
  `
  fs.appendFile('userData.txt', userData, err => {
    if(err) throw err;
    console.log(user.firstname + ' was saved!');
  });

  res.render('submitted', {
    title: 'Form-Accepted',
    "config": config,
    user
  });
};

exports.features = (req, res) => {
  res.render('features', {
    "title": "Features Page",
    "config": config,
    
  })
}