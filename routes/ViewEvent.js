var express = require('express');
var router = express.Router();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var Image = require('../models/Imagedata');
var User = require('../models/Userdata');

//view all events
router.get('/ViewEvent',function (req, res) {
  User.find({}, function (err, docs) {
    if(err) return console.error(err)
    // console.log(docs);
    res.render('ViewEvent',{
      docs:docs
    })
  }).lean();
});

//for toggling images
router.get('/display',function(req,res){
  var entry_id = req.query.id;
  // console.log(entry_id);
  User.find({},function(err,docs){
    if(err) return console.error(err);
    // console.log("user in find docs id");
    // console.log(docs[entry_id]._id);
      Image.find({'id': docs[entry_id]._id},function(err,data){
        if(err) return console.error(err);
      //  console.log(data);
       res.send(data);
      }).lean();
  }).lean();
});

//for toggling maps
router.get('/latlng',function(req,res){
    // console.log(req.query.current);
    var x = req.query.current;
    User.find({},function (err, docs) {
    if (err) return console.error(err);
    // console.log(docs[x].lat);
    // console.log(docs[x].lng);
    res.send(docs[x]);
    });
});

module.exports = router;