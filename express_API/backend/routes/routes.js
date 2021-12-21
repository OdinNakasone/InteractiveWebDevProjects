const theJSON = [
{
  name: "Bob",
  age: 21,
  species: "Zombie"
},
{
  name: "Suzette",
  age: 34,
  species: "Vampire"
},
{
  name: "Harry",
  age: 42,
  species: "Werewolf"
},
{
  name: "Sally",
  age: 28,
  species: "Human"
}

];

exports.api = (req, res) => {
  if(req.query.id == undefined){
    res.json(theJSON);
  } else{
    res.json(theJSON[req.query.id]);
  }
  
};