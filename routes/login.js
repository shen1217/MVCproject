/**
 * Created by Administrator on 2015/6/11.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index');
});

router.post('/', function (req,res) {
    var _userName = req.body.username.trim();
    var _password = req.body.password;
    var username ='Selena';
    var password = '123';
    if(_userName.toUpperCase() == username.toUpperCase() && _password == password)
    {
        req.session.user = username;
        res.redirect('list');
    }
    else
    {
        res.redirect('login');
    }
});

module.exports = router;