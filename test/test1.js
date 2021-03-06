/**
 * Created by Administrator on 2015/6/17.
 */
var should = require('should');
var Q = require('q');

var query = function(sql) {
    var deferred = Q.defer();
    if(sql) {
        deferred.resolve(1);
    } else {
        deferred.reject(-1);
    }
    return deferred.promise;
}


describe('Testing Group', function() {
    it('should return 1', function() {
      return  query('anything').then(function(data) {
            data.should.equal(1);

        });
    });
    it('should return -1', function() {
         query('anything').then(function(data) {
            data.should.equal(-1);

        });
    });
});

