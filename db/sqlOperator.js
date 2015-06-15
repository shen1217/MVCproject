/**
 * Created by Administrator on 2015/6/10.
 */
var mssql = require('mssql');
var config = {
    user:'sa',
    password:'sql@123',
    server:'192.168.2.199',
    database:'testing',
    options:{encrypt:false}
}
/*var config = {
    user:'sa',
    password:'999',
    server:'192.168.1.103',
    database:'testing',
    options:{encrypt:false}
}*/
//create connection
    exports.query = function(sql,callback) {
        var connection = new mssql.Connection(config, function (err) {
            if (err)
                console.log(err);
            else
                console.log('Connected');

            var request = new mssql.Request(connection);

            request.query(sql,callback);
        });
    }











