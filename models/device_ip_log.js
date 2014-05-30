// device_id		local_IPs	public_IP	proxy_IPs	created_date

var device_ip_log = function(){
	this.device_id = arguments[0] || null;
	this.local_IPs = arguments[1] || null;
	this.public_IP = arguments[2] || null;
	this.proxy_IPs = arguments[3] || null;
	this.created_date = arguments[4] || new Date(); // web server date
};

module.exports = (function(app){
	return device_ip_log;
})();