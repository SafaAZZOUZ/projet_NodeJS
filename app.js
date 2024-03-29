var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var articleRouter = require('./routes/article');
var categoriesRouter = require('./routes/categorie');
var commentairesRouter = require('./routes/commentaires');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/article', articleRouter);
app.use('/categorie', categoriesRouter);
app.use('/commentaires', commentairesRouter);



module.exports = app;
