/*
 * MongoDB repository
 * 
 */
var mongojs = require('mongojs');

module.exports = (function(app){

	var uri = 'mongodb://aenm:azura@ds033489.mongolab.com:33489/aenm';
	var dcb = function(err, result){
		console.log(err);
	};
	
	var collections = [
		'test', 
		'users', 
		'devices', 
		'device_attributes', 
		'attribute_references', 
		'device_domain_log', 
		'device_ip_log'
	];
	
	var db = require("mongojs").connect(uri, collections);

	var repository = {
		
		test: function(cb){
			cb = cb || dcb;
			db.test.save({email: "quinvit@yahoo.com", password: "iLoveMongo", sex: "male"}, 
				function(err, saved) {
				  if( err || !saved ) cb(err);
				  else cb();
				  // Remove saved item
				  db.test.remove({}, function(err){});
				}
			);
		},
		
		query: function(query, cb){
			cb = cb || dcb;	
		}
	};

	return repository;

})();
