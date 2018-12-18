var mongoose = require('mongoose').set('debug',true);
var Schema = mongoose.Schema;

var imageSchema = new Schema({
	id: String,
	path: {
		type: String,
		required: true,
		trim: true
	},
	originalname: {
		type: String,
		required: true
	}	
},{collection:'images'});

module.exports = mongoose.model("Image",imageSchema);
