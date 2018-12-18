var express = require('express');
var router = express.Router();

//contact
router.get('/', function(req, res) {
  res.render('ContactUs', {title: 'AR EVENTS' });
});

module.exports = router;
