/**
 * @author qui.nguyen 2014
 */

var express = require('express'),
			  util = require('util'),
			  http = require('http'),
			  https = require('https'),
			  fs = require('fs'),
			  gzippo  = require('gzippo'),
			  lessMiddleware = require('less-middleware'),
			  bodyParser = require('body-parser'),
			  expressValidator = require('express-validator'),
			  sass = require('node-sass'),
			  _ = require('underscore'),
              NodeCache = require("node-cache");
			  
const HTTPS_CONFIG = {
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/server.crt')
};
			  
// Create node app
var app = express();

// gzip
app.use(gzippo.staticGzip(__dirname + '/public'));
app.use(gzippo.compress());

// parser & validator
app.use(bodyParser());
app.use(expressValidator());

// sass
app.use(sass.middleware({
    src: __dirname + '/public',
    dest: __dirname + '/public',
    debug: false
}));

// less
app.use(lessMiddleware(__dirname + '/public'));

// static
app.use(express.static(__dirname + '/public'));

// util
app.util = util;
app.cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
app._ = _;

// lib
app.repository = require('./lib/repository');

// Serve index.html as default document
app.get('/', function(req, res){	
	res.sendfile(__dirname + '/index.html');	
});

// Routing
fs.readdirSync('./routes').forEach(function(file) {
  require('./routes/' + file);
});

// Start application http and https
http.createServer(app).listen(3001);
https.createServer(HTTPS_CONFIG, app).listen(3000);
