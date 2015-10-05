var proxy = require('express-http-proxy');
var express = require('express');
var app = express();

var j2eeServices = 'commodities/';

app.use('/', express.static('app'));
app.use('/bower_components', express.static('bower_components'));
app.use('/' + j2eeServices, proxy('http://localhost:8080/' + j2eeServices, {
    forwardPath: function(req, res) {
        console.log(require('url').parse(req.url).path);
        return require('url').parse('/' + j2eeServices + req.url).path;
    },
    port: 8080
}));

app.listen('9000');
