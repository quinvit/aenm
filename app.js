/**
 * @author qui.nguyen
 */

var express = require('express'),
			  util = require('util'),
			  https = require('https'),
			  fs = require('fs'),
			  mysql = require('mysql'),
			  compress = require('compression'),
			  bodyParser = require('body-parser'),
			  expressValidator = require('express-validator'),
			  sass = require('node-sass'),
              NodeCache = require("node-cache");
			  
var key = fs.readFileSync('./ssl/server.key');
var cert = fs.readFileSync('./ssl/server.crt');

var https_options = {
  key: key,
  cert: cert
};

var app = express();

app.use(compress());
app.use(bodyParser());
app.use(expressValidator());

app.use(sass.middleware({
    src: __dirname + '/public',
    dest: __dirname + '/public',
    debug: false
}));

app.use(express.static(__dirname + '/public'));

app.util = util;
app.cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

// Index host
app.get('/', function(req, res){	
	res.sendfile(__dirname + '/index.html');	
});

// Routing api
require('./api/users')(app);


// Rounting widgets

// Start application
var server = https.createServer(https_options, app).listen(3000);
// app.listen(3000);