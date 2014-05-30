// attribute_name attribute_hash_value	attribute_raw_value	created_date

var attribute_ref = function(){
	this.attribute_name = arguments[0] || uuid.v1();
	this.attribute_hash_value = arguments[1] || null;
	this.attribute_raw_value = arguments[2] || null;
	this.created_date = arguments[3] || new Date(); // web server date
};

module.exports = (function(app){
	return attribute_ref;
})();