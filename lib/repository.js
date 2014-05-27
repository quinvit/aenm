/*
 * MongoDB repository
 * 
 */
var mongojs = require('mongojs');

module.exports = (function(app){

	var uri = 'mongodb://aenm:@aenm#@ds033489.mongolab.com:33489/aenm';
	var dcb = function(err, result){};
	
	var collections = ['test'];
	var db = require("mongojs").connect(uri, collections);

	var repository = {
		
		test: function(){
			
			db.test.save({email: "quinvit@yahoo.com", password: "iLoveMongo", sex: "male"}, 
				function(err, saved) {
				  if( err || !saved ) console.log("User not saved");
				  else console.log("User saved");
				}
			);
		},
		
		query: function(query, cb){
			cb = cb || dcb;	
		}
	};

	return repository;

})();
