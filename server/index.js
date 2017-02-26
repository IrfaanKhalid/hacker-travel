// Required files/packages
var express = require('express')
var dist = require('../data/dist.js')
var gprice = require('../data/gprice.js')

var app = express();

var usrloc = "40.1020,-88.2272"; // UIUC to test

app.get('/', function(req, res) {
    res.sendfile("src/static/index.html");
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})