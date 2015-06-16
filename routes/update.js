/**
 * Created by Administrator on 2015/6/14.
 */
var express = require('express');
var router = express.Router();
var q = require('q');
var sqlOperator = require('../db/sqlOperator.js');

router.get('/', function (req,res,next) {
    req.session.count =  req.session.count ?  req.session.count+1 :1;
    sqlOperator.query('select * from products where id='+req.query.pid, function (err,result) {
        res.render('update',{ products: result.length ==0 ? true: result  });
    });
})


router.post('/edit', function (req,res,next) {
    var sql = "update products set name='"+req.body.name
        +"',des='"+req.body.des+"',image='"+req.body.image+"' where id="+req.body.pid;
    sqlOperator.query(sql, function (err,result) {
            if(err) {
                res.send(err);
            }
            else
            {
                res.send({isSuccess:true});
            }
    });
});

router.post('/edit2', function (req,res,next) {
    var deferred = q.defer();
    var sql = "update products set name='"+req.body.name
        +"',des='"+req.body.des+"',image='"+req.body.image+"' where id="+req.body.pid;
    sqlOperator.query(sql, function (err,result) {
        if(err) {
            deferred.reject(err);
        }
        else
        {
            deferred.resolve({isSuccess:true});
        }
    });
    return  deferred.promise();
});

router.post('/add', function (req,res,next) {
    var sql  = "insert into products(name,des,image) values ('"+req.body.name
        +"','"+req.body.des+"','"+req.body.image+"')";
    console.log(sql);
    sqlOperator.query(sql, function (err,result) {
        if(err) {
            res.send(err);
        }
        else
        {
            res.send({isSuccess:true});
        }

    });
})

 module.exports = router;