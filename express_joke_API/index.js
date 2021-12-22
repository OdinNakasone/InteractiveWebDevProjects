const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Acess-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

let urlEncodedParser = bodyParser.urlencoded({extended:true});

app.use

app.get('/api', routes.api);
app.post('/api',urlEncodedParser,routes.addJoke)

app.listen(3000)