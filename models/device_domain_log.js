// device_id		referer_domain		domain	created_date

var device_domain_log = function(){
	this.device_id = arguments[0] || null;
	this.referer_domain = arguments[1] || null;
	this.domain = arguments[2] || null;
	this.created_date = arguments[3] || new Date(); // web server date
};

module.exports = (function(app){
	return device_domain_log;
})();