var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const cors = require('cors');

var apiRouter = require('./routes/api');

var app = express();

mongoose.connect('mongodb+srv://jhgalino:jhgalino@cluster0.jbrtk.mongodb.net/toDo?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: 'http://localhost:3000'
}));


app.use('/api', apiRouter);

module.exports = app;
