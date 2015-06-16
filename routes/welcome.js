var express = require('express');
var router = express.Router();
var sqlOperator = require('../db/sqlOperator.js');

/* GET home page. */
router.get('/', function (req,res) {
/*  var sqlu = "select * from users where name='"+req.body.username +"'";*/
    var sqlu = "select * from users where name='admin'";

    sqlOperator.query2(sqlu).then(function (dataUser) {
        return sqlOperator.query2('select * from orders where userID='+dataUser[0].id);
    }).then(function (dataOrder) {
        var idList ='' ;
       for(var i=0;i < dataOrder.length ;i++)
        {
            idList = idList + dataOrder[i].productID +',';
        }
        if(idList.length >0){
            idList=idList.substring(0,idList.length-1);
        }
        return sqlOperator.query2('select * from products where  id in ('+idList +')');
    }).then(function (result) {
        res.render('welcome',{products: result} )
    }).fail(function(err) {
        res.json({error: err});
    });
});


module.exports=router;
