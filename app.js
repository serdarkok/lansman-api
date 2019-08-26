var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Mongoose Bağlantısı
mongoose.connect(process.env.DB, { useNewUrlParser: true });

mongoose.connection.on('open', ()=> {
    console.log('MongoDB Connected!');
    
});
mongoose.connection.on('error', (error) => {
    console.log('MongoDB Error!');
    console.log(error);
    
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

module.exports = app;
