require("./services/databaseConnectionService");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var helmet = require("helmet");
var helmetCsp = require("helmet-csp");

var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Style directory
app.use(
  "/stylesheets",
  express.static(path.join(__dirname, "public/stylesheets"))
);

// js directory 
app.use(
  "/javascripts",
  express.static(path.join(__dirname, "public/javascripts"))
);

// node_modules directory
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// Helmet and Helmet-CSP
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(
  helmetCsp({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
      ],
      objectSrc: ["http://localhost:443/"],
      upgradeInsecureRequests: [],
    },
    reportOnly: false, // Envoi un rapport
  })
);

// Cors
app.use(
  cors({
    origin: "https://localhost:3000",
    méthodes: ["GET", "POST", "PUT", "DELETE"],
  })
);

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

module.exports = app;
