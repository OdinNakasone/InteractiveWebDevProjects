exports.index = (req, res) =>{
    res.send('<h1>Hello World!</h1>')
};

exports.potato =  (req, res) =>{
    res.send('<h2>I Like potatoes!</h2>');
};

exports.hello = (req, res) =>{
    res.send(`<h2>Hello ${req.query.name}!!!</h2>`);
};

exports.goodbye = (req, res) => {
    res.send(`<h2>Welcome to ${req.params.name}'s webpage!</h2>`);
};