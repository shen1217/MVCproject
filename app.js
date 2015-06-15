var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var uuid = require('uuid');
var witer = require('fs');

var logurl = path.join(__dirname+'/testDebug.log');
/*
var witerLog= witer.createWriteStream('./testDebug.log');
*/
var witerLog= witer.createWriteStream(logurl);

var routes = require('./routes/index');
var users = require('./routes/users');
var welcome = require('./routes/welcome');
var list = require('./routes/list');
var login = require('./routes/login');
var update = require('./routes/update');

var app = express();

/*app.set('partials',{footer:'footer'});*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

console.log(witer.readFileSync(logurl).toString('utf-8'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(session ({
  genid:function(req){
    return uuid.v4();
  },
  secret:'1caifu.com',
  resave:false,
  saveUninitialized: true
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('tiny', {stream: witerLog}))

app.use('/', routes);
app.use('/users', users);
app.use('/welcome', welcome);
app.use('/list',list);
app.use('/login',login)
app.use('/update',update);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
