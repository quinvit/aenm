// device_id		device_code		created_date

var uuid = require('node-uuid');

var device = function(){
	this.device_id = arguments[0] || uuid.v1();
	this.device_code = arguments[1] || null;
	this.created_date = arguments[2] || new Date(); // web server date
};

module.exports = (function(app){
	return device;
})();
