/*
 Serve script to detect device
 * */

module.exports = function(app){	
    // Activator script on original domain
	app.get('/as', function(req, res){
		var result = {};
		
		res.send(JSON.stringify(result), 200);
	});
	
	// Cross domain iframe script
	app.get('/is', function(req, res){
		var result = {};
		
		res.send(JSON.stringify(result), 200);
	});	
	
	// Handle fingerprint information
	app.get('dh', function(req, res){
		var result = {};
		
		res.send(JSON.stringify(result), 200);
	});
	
	// Handle detail information
	app.post('dr', function(req, res){
		var result = {};
		
		res.send(JSON.stringify(result), 200);        
	});
};