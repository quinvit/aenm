/*
 Serve script to detect device
 * */

module.exports = function(app){	
	app.get('/as', function(req, res){
		var result = {};
		
		es.send(JSON.stringify(result), 200);
	});
	
	app.get('/as', function(req, res){
		var result = {};
		
		es.send(JSON.stringify(result), 200);
	});	
};