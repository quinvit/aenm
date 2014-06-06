/**
 * @author qui.nguyen 2014
 */

var express = require('express'),
    util = require('util'),
    http = require('http'),
    https = require('https'),
    fs = require('fs'),
    compress  = require('compression'),
    lessMiddleware = require('less-middleware'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    sass = require('node-sass'),
     _ = require('underscore'),
     redis_client = require('redis-client-manager'),
    NodeCache = require('node-cache');

// Configuration, default - local mode
var config = require('./config/server.json');
config = config[process.argv[2] || 'local'] || config.local;

// Create node app
var app = express();

// view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// gzip
app.use(compress());

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

// Routing
fs.readdirSync('./routes').forEach(function(file) {
  require('./routes/' + file)(app);
});

//Serve index.html as default document
app.get('/', function(req, res){	
	res.render('index');	
});

// Start application http and https
http.createServer(app).listen(process.env.PORT || config.http_port, process.env.IP || '127.0.0.1');
config.enable_ssl && https.createServer(
	{
		key: fs.readFileSync(config.ssl.key),
		cert: fs.readFileSync(config.ssl.cert)
	}, 
	app
).listen(config.https_port, process.env.IP || '127.0.0.1');

