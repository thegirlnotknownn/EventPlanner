var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var User = require('../models/Userdata');
var Image = require('../models/Imagedata');

//set the storage engine
var storage = multer.diskStorage({
  destination : function(req,file,cb){
    cb(null,'./public/uploads')
  },
  filename : function(req,file,cb){
    cb(null,file.originalname);
  }
});

//init upload
var upload = multer({
  storage: storage
});

//create page
router.get('/',function (req,res) {
    res.render('CreateEvent',{ title: 'CREATE'});
});
 

//saving dataaaa
router.post('/CreateEvent',upload.any(), function (req,res){
  var newUser = new User({
    name:req.body.name,
    contact:req.body.contact,
    email:req.body.email,
    address:req.body.address,
    type:req.body.type,
    lat:req.body.lat,
    lng:req.body.lng
  });
  newUser.save(function(err,data){
    if(err) return console.log(err)
    // console.log(data);
    for(var i=0;i<req.body.x;i++){
      var newImage = new Image({
        id : newUser._id,
        path: req.files[i].path,
        originalname:req.files[i].originalname
      });
    // console.log(newImage);
      newImage.save();
    }
  });
  return res.redirect('/CreateEvent');
});

module.exports = router;