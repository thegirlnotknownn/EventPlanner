var mongoose = require('mongoose').set('debug',true);
var Schema = mongoose.Schema;
var Image = require('./Imagedata');

var userSchema = new Schema({
    name: {type: String, required: true},
    contact:{type: Number, required: true},
    email:{type: String, required: true},
    address: String,
    type: String,
    lat: String,
    lng: String,
    imageSchema : [{type: mongoose.Schema.ObjectId, ref:'Image'}]
},{collection:'users'});


var User = mongoose.model("User", userSchema);
module.exports = User;