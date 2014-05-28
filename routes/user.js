/*
 Serve /users
 * */

module.exports = function(app){	
	app.get('/users', function(req, res){
		var result = {};
		
		app.repository.test(function(err){
			res.send(JSON.stringify(err || result), 200);
		});		
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