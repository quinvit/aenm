// device_code	attribute_name	attribute_hash_value		created_date

var device_attributes = function(){
	this.device_code = arguments[0] || null;
	this.attribute_name = arguments[1] || null;
	this.attribute_hash_value = arguments[2] || null;
	this.created_date = arguments[3] || new Date(); // web server date
};

module.exports = (function(app){
	return device_attribute;
})();
