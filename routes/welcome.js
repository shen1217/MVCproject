var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
   /* res.render('welcome', { title: req.body.title });*/
    res.render('welcome', { title: req.body.title,am:16,condition:[
        {name:'iphone6',price:5488,image:'images/1.jpg'},
        {name:'iphone6 plus',price:6088,image:'images/2.jpg'},
        {name:'华为',price:1288,image:'images/3.jpg'},
        {name:'三星S6',price:6288,image:'images/4.jpg'},
        {name:'HTC',price:1088,image:'images/5.jpg'},
        {name:'联系 K3 Note',price:988,image:'images/6.jpg'}
    ] });

});

module.exports=router;
