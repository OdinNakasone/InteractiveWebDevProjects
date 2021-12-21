const bcrypt = require('bcryptjs');

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("bacon", salt);

console.log(salt);
console.log(hash);

console.log(bcrypt.compareSync('bacon', hash));

// Asynchronous Salt and Hash


const makeHash = the_str => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(the_str, salt, (err, my_hash) => {
      hash_complete(my_hash);
    });
  });
};

const hash_complete = the_hash =>{
  console.log(the_hash);
  bcrypt.compare('bacon', the_hash, (err, res)=> {
    console.log(res);
  });

  bcrypt.compare('veggies', the_hash, (err, res)=> {
    console.log(res);
  });
};

makeHash('bacon');
