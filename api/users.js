var repository = require('../lib/repository');

module.exports = function(app){	
	app.get('/users', function(req, res){
		var result = {};
		
		repository.test();
		
		res.send(JSON.stringify(result), 200);
	});

	app.delete('/users', function(req, res){
		res.end('Not implemented.');			
	});
	
	app.post('/users', function(req, res){
		res.end('Not implemented.');				
	});
	
	app.put('/users', function(req, res){
		res.end('Not implemented.');				
	});	
};