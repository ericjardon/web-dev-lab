const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bikesRouter = require('./routes/bikes');
const bikesApiRouter = require('./routes/api/bikes');

const app = express();

//VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTERS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bikes', bikesRouter);
app.use('/api/bikes', bikesApiRouter);

// ERROR CATCHING: catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// GENERIC ERROR HANDLER
app.use(function(err, req, res, next) {
  // set locals, only provide error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render error page with error code
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
