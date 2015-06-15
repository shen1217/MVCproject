var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // req.session.user = "1caifu";
  res.render('index', { title: 'Express',condition:false});
});

module.exports = router;
