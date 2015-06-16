/**
 * Created by Administrator on 2015/6/16.
 */
var should = require('should');
var sqlOperator = require('../db/sqlOperator.js');

var getArray = function () {
    return [1,2,3]
}

var getString = function () {
    return "Hello";
}

/*
 describe('Test Biz function', function () {
    it('should return 2', function () {
        getArray().should.have.length(3);
    });
});

describe('Test String function', function () {
    it('should begin with H', function () {
        getString().should.startWith('H');
    });
});
*/



describe('user list.', function () {
        it('query user list.', function () {
            return  sqlOperator.query2("select * from users").then(function (result) {
                console.log(result);
                should(result).ok;

          });
        });
      it('query user list by name.', function () {
                sqlOperator.query2("select * from Users where name='admin' ").then(function (result) {
                    console.log(result);
                    recordSet.length.should.eql(1);
                })
        });

});





