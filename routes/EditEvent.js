var express = require('express');
var router = express.Router();

var User = require('../models/Userdata');

router.get('/', function(req, res, next) { 
    res.render('EditEvent', {title: 'yo!' });
});

//update 
router.post('/UpdateEvent', async function (req,res){
    User.findOneAndUpdate({email:req.body.email},{name:req.body.name,contact:req.body.contact}, function(err,user){
      if (err)
        console.log(err);
      // console.log(user);
    })
    res.redirect('../ViewEvent/ViewEvent');
})

//delete
router.post('/DeleteEvent',function (req,res) {
   User.findOneAndRemove({email:req.body.email}, function(err){
    if(err) 
      console.log(err);
    res.redirect("../ViewEvent/ViewEvent");
   });
   
});

module.exports = router;
