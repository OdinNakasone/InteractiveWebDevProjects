const fs = require('fs');

exports.index = (req, res) => {
    res.render('index', {
        title: 'Home'
    });
};

exports.dealWithData = (req, res) => {
 let person = {
     name: req.body.name,
     age: req.body.age,
     species: req.body.species,
     victims: req.body.victims
 };

 let personData = `
 name: ${person.name}
 age: ${person.age}
 species: ${person.species}
 victims: ${person.victims}
 --------------
 `

 fs.writeFile('myFile.txt', personData, err => {
     if(err) throw err;
     console.log('Saved!');
 });

 res.render('submitted', {
     title: 'Form-Accepted',
     person
 });
};