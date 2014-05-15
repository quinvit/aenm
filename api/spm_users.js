var repository = require('../lib/repository');

module.exports = function(app){	
	app.get('/user', function(req, res){
		
		var result = {};
		
		res.send(JSON.stringify(result), 200);
	});

	app.del('/user', function(req, res){
		res.end('Delete ' + req.query.id + ' is not implemented.');
	});
	
	app.post('/user', function(req, res){
		res.end('Not implemented.');				
	});
	
	app.put('/user', function(req, res){
		res.end('Not implemented.');				
	});	
};