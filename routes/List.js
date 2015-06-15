/**
 * Created by Administrator on 2015/6/10.
 */
var express = require('express');
var router = express.Router();
var sqlOperator = require('../db/sqlOperator.js');


router.get('/', function (req,res) {
    req.session.count =  req.session.count ?  req.session.count+1 :1;
    sqlOperator.query('select * from products', function (err,result) {
        res.render('list',{title:req.session.user,
            count:req.session.count,
            products: result  });
    });
})

router.post('/delete', function (req,res,next) {
    sqlOperator.query('delete from products where id ='+req.body.pid, function (err,result) {
        if(err)
        throw err;
        res.send({isSuccess:true});
    });
});


module.exports = router;