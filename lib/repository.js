var _ = require('underscore');
var mysql = require('mysql');

module.exports = (function(app){

	// Create mysql connection pool
	var pool   = mysql.createPool({
	  host     : 'localhost',
	  port	   : 3306,
	  user     : 'spm',
	  password: 'sudo@#',
	  database: "atour",
	  multipleStatements: true
	});
	
	var default_cb = function(err, results){
		console.log(err);
	};

	return {
		query: function(sql, cb){
			var cb = cb || default_cb;			
			pool.getConnection(function(err, connection) {
				
				if(err) {
					cb(err);
					return;
				}			
				
				connection.query(sql, function(err, results) {
					if(err){
						cb(err, 500);
					}
					else {
			 			cb(null, results); 			
					};
					
					connection.release();	
				});
			});
		}
	};
	
})();
