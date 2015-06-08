var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    res.render('welcome', { title: req.body.title });
});

module.exports=router;
