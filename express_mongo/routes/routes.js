const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

 
let personSchema = mongoose.Schema({
  name: String,
  age: String,
  species: String,
  image_url: String
});

let Person = mongoose.model('People_Collection', personSchema);

exports.index = (req, res) => {
  Person.find((err, person) => {
    if(err) return console.error(err)
    res.render('index', {
      title: 'People List',
      people: person
    });
  });
}

exports.create = (req, res) => {
  res.render('create', {
    title: "Add Person"
  });
};

exports.createPerson = (req, res) => {
  let person = new Person({
    name: req.body.name,
    age: req.body.age,
    species: req.body.species,
    image_url: req.body.image_url
  });

  person.save((err, person) => {
    if(err) return console.error(err);
    console.log(req.body.name + " was added");
  });
  res.redirect('/');
};

exports.edit = (req, res) => {
  Person.findById(req.params.id, (err, person) => {
    if(err) return console.error(err);
    res.render('edit', {
      title: 'Edit Person',
      person
    });
  });
  
};

exports.editPerson = (req, res) =>{
  Person.findById(req.params.id, (err, person) => {
    if (err) return console.error(err);
    person.name = req.body.name;
    person.age = req.body.age;
    person.species = req.body.species
    person.image_url = req.body.image_url

    person.save((err, person) => {
      if(err) return console.error(err);
      console.log(req.body.name + " was updated");
    });
    res.redirect('/');
  });
};

exports.delete = (req, res) => {
  Person.findByIdAndDelete(req.params.id, (err, person) => {
  if (err) return console.error(err);
  });
  res.redirect('/');
};

exports.details = (req, res) =>{
  Person.findById(req.params.id, (err, person) => {
    if (err) return console.error(err);
  res.render('details', {
    title: `${person.name}'s Details`,
    person
  });
});
}

exports.db_fun = (req, res) => {
  Person.find({species: "Human"}, (err, person) => {
    if (err) return console.error(err);
    res.json(person);
  });
};