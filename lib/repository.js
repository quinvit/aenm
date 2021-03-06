/*
 * MongoDB repository
 * 
 */

var mongojs = require('mongojs');
var config = require('../config/mongojs.json');

module.exports = (function(app){

	var uri = config.uri, 
		collections = config.collections,
		db = mongojs.connect(uri, collections),
		dcb = function(err, result){
			console.log(err);
		};

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
		// Get specific collection
		get: function(collection){
			return collection || db.collection(collection);		
		}
	};

	return repository;

})();
