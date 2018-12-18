const express = require('express');
const router = express.Router();
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var Image = require('../models/Imagedata');


//image page
router.get('/',function (req,res) {
    res.render('image',{ title: 'YAY!?'});
});

router.get('/image',function(req,res){
  	Image.find({}, function(err,image) {
    	if(err) return console.error(err)
     	res.render('image', { 
      		image:image 
    	}); 
  	});
});

module.exports = router;