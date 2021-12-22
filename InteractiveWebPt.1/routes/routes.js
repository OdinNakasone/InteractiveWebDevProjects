const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const chartjs = require('chart.js');
mongoose.Promise = global.Promise;

let visited = 0;


mongoose.connect('mongodb+srv://admin:1234@cluster0.itudf.mongodb.net/test') ,
{
  useUnifiedTopology: true,
  useNewUrlParser: true
}

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => { });

let accountSchema = mongoose.Schema({
  username: String,
  password: String,
  age: String,
  email: String,
  movie: String,
  mood: String,
  animal: String
});

let Account = mongoose.model('Account_Collection', accountSchema);

exports.create = (req, res) => {
  res.render('create', {
    title: 'Create Account'
  });
};

exports.createAccount = (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, my_hash) => {
      let account = new Account({
        username: req.body.username,
        password: my_hash,
        age: req.body.age,
        email: req.body.email,
        movie: req.body.movie,
        mood: req.body.mood,
        animal: req.body.animal
      });
      account.save((err) => {
        if (err) return console.error(err);
        console.log(req.body.name + ' added');
      });

    });
  });


  res.redirect('/');
}

exports.edit = (req, res) => {
  Account.find({ username: req.params.id}, (err, account) => {
    if (err) return console.error(err);
    console.log(account)
    useAccount =account[0]
    res.render('edit', {
      title: 'Edit Account',
      useAccount
    });
  });
};

exports.login = (req, res) => {
  Account.find({ username: req.body.username}, (err, account) => {
    if (err) return console.error(err);
      if(req.body.username == account[0].username &&  bcrypt.compareSync(req.body.password,account[0].password)) {
      req.session.user = {
        isAuthenticated: true,
        username: req.body.username
      }
      console.log(req.body.username)
      res.redirect(`/edit/${req.session.user.username}`)
    }
  });
}

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
    };
  });
}

exports.editAccount = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
      Account.findById(req.params.id, (err, account) => {
        bcrypt.hash(req.body.password, salt, (err, my_hash) => {
          let account = new Account({
            username: req.body.username,
            password:  req.body.password,
            age: req.body.age,
            email:  req.body.email,
            movie: req.body.movie,
            mood:  req.body.mood,
            animal: req.body.animal
          });
          account.save((err) => {
            if (err) return console.error(err);
            console.log(req.body.username + ' added');
          });
          res.redirect('/');
        });
      });
    });
};

exports.home = (req, res) => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  var hr = today.getHours();
  var mins = today.getMinutes();
  if(dd<10) 
  {
      dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  } 
  today = mm+'/'+dd+'/'+yyyy+", "+hr+":"+mins;
  // console.log(today);
  

  res.cookie('visited', today, { maxAge: 99999999999999999999 });
  var hold= undefined
  if(hold === undefined)
  {
    hold= null
  }
  else {
   hold=  req.session.user.username
  }
  res.render('home', {
    title: 'Home',
    date: req.cookies,
    hold
  });
};

exports.api = (req, res) => {
  let allAnswers = {
    "What is your favorite movie gerne" :{
      "Horror": 0,
      "Comedy" : 0,
      "Thriller" : 0,
      "Action" : 0,
    },
    "What is your normal mood" :{
      "Cheerful": 0,
      "Gloomy" : 0,
      "Apathetic" : 0,
      "Envious" : 0,
    },
    "What is your favorite animal" :{
      "Water Bear": 0,
      "Immortal Jellyfish" : 0,
      "Sawfish" : 0,
      "Axolotl" : 0,
    },
  }

  if (req.params.id == undefined) {
    Account.find((err, account) => {
      account.forEach( use => 
        {
         
          allAnswers["What is your favorite movie gerne"][use.movie]++
          allAnswers["What is your normal mood"][use.mood]++
          allAnswers["What is your favorite animal"][use.animal]++
          
          // console.log(use.movie)
          // console.log(use.mood)
          // console.log(use.animal)
        })
      // console.log(account)
      if (err) return console.error(err);
      res.json(allAnswers);
    });
  } else {
    Account.find( (err, account) => {
      if (err) return console.error(err);
      res.json(account.slice(0, parseInt(req.params.count)));
    });
  }

};