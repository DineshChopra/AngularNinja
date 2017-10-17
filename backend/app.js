var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var heroRoutes = require('./routes/hero');
var cardRoutes = require('./routes/card');
var bankRoutes = require('./routes/bank');
var cricketRoutes = require('./routes/cricket');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    if (req.method === "OPTIONS") 
        res.sendStatus(200)
    else 
        next();
});

app.use('/api/hero', heroRoutes);
app.use('/api/card', cardRoutes);
app.use('/api/bank', bankRoutes);
app.use('/api/cricket', cricketRoutes);

console.log('public api list is given below');
console.log('localhost:3010/api/hero');
console.log('localhost:3010/api/card');
console.log('localhost:3010/api/bank');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});



module.exports = app;
