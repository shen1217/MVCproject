/**
 * Created by Administrator on 2015/6/15.
 */
var events = require('events');
var q = require('q');

var eventEmitter = new events.EventEmitter();

var step1 = function (callback) {
    console.log('step1 start');
    var defered = q.defer();
    setTimeout(function () {
        callback('step1');
        defered.resolve('defer1111');
    } ,3000);

 //   return defered.promise();
};


var step2 = function (callback) {
    console.log('step2 start');

    setTimeout(function () {
        callback('step2');
        eventEmitter.emit('step2end');
    } ,2000);
};

var step3 = function (callback) {
    console.log('step3 start');

    setTimeout(function () {
        callback('step3');
        eventEmitter.emit('step3end');
    } ,1000);
};


var _StepEnd = function (msg) {
    console.log(msg + ' end')
};

/*
step1(function (msg1) {
    _StepEnd(msg1);
    step2(function (msg2) {
        _StepEnd(msg2);
        step3(function (msg3) {
            _StepEnd(meg3);

        });
    });
});
*/
/*
step1(_StepEnd);
step2(_StepEnd);
step3(_StepEnd);
*/


q().then(function () {
    step1(_StepEnd);
}).then(function () {
    step2(_StepEnd);
}).then(function () {
    step3(_StepEnd);
})
