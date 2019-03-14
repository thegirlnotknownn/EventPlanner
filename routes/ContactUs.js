var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ContactUs', {title: 'AR EVENTS' });
});

module.exports = router;
