
const { query } = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/data',{
    useUnifiedTopology:true,
    useNewUrlParser: true 
})

let mdb = mongoose.connection;
mdb.on('error',console.error.bind(console,'connection_error'))
mdb.once('open',callback => {})

let jokeSchema = mongoose.Schema({
    joke:String,
    answer: String,
    category:String
})

let Joke = mongoose.model('Joke_Collection',jokeSchema)

//WRITE ======================================================
exports.addJoke = (req,res) => {
    let joke = new Joke({
        joke:req.body.joke,
        answer: req.body.answer,
        category:req.body.category
    });

    joke.save((err,joke)=>{
        if (err) return console.error(err)
        console.log("Joke Added!")
        res.sendStatus(200)
    })
}

//READ ===============================================

exports.api = (req, res) => {

    if(req.query.category == undefined && req.query.limit == undefined){

        Joke.find((err,jokeList)=>{
            if (err) return console.error(err);
            res.json(jokeList);
        })

    }
    else{

    if(req.query.limit == undefined){

        if(req.query.category == "all_jokes"){
            Joke.find((err,jokeList)=>{
                if (err) return console.error(err);
                res.json(jokeList);
            })
        }else{
            Joke.find({category: req.query.category}, (err,jokeList) =>{
                if (err) console.log(err);
                res.json(jokeList)
            })
        }

    }else{

        if(req.query.category == "all_jokes"){

            Joke.find({}, (err,jokeList) =>{
                if (err) console.log(err);
                res.json(jokeList)
            }).limit(parseInt(req.query.limit))

        }else{
            Joke.find({category: req.query.category}, (err,jokeList) =>{
                if (err) console.log(err);
                res.json(jokeList)
            }).limit(parseInt(req.query.limit))
        }

    }

}



}