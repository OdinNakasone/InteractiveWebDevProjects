const config = require('../config');


exports.index = (req, res ) => {
    res.render('index', {
        "title": "Home",
        "config": config
    })
};

exports.potato = (req, res) => {
    res.render('potato', {
        "title": "Happy Potato!",
        "config": config
    })
};

exports.hello = (req, res) => {
    let name = req.query.name;
    res.render('hello', {
        "title": `${name}'s Page`,
        "name" : name,
        "config": config
    });
};

exports.goodbye = (req, res) => {
    let name = req.params.name;
    res.render('goodbye', {
        "title": `${name}'s Webpage!!!`,
        "name": name,
        "config": config
    })
};

exports.page1 = (req, res) => {
    res.render('page1', {
        "title": "Page1",
        "config": config
    })
}

exports.page2 = (req, res) => {
    res.render('page2', {
        "title": "Page2",
        "config": config
    })
}

