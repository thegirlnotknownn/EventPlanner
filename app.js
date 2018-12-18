var createError = require('http-errors');
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require('ejs');
 
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var CreateEvent = require('./routes/CreateEvent');
var EditEvent = require('./routes/EditEvent');
var ViewEvent = require('./routes/ViewEvent');
var ContactUs = require('./routes/ContactUs');

var app = express();

mongoose.connect("mongodb://localhost:27017/Events");

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Mongo connection error'));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Public Folder
app.use(express.static('./public'));

app.use('/', indexRouter);
app.use('/CreateEvent', CreateEvent);
app.use('/EditEvent', EditEvent);
app.use('/ViewEvent', ViewEvent);
app.use('/ContactUs',ContactUs);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
console.log("Server is Up and Running!");
module.exports = app;