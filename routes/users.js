var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*router.list('/', function(req, res, next) {
 res.send('list method');
 });*/
module.exports = router;
