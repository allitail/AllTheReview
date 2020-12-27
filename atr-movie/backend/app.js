var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var https = require('https');

var mysql = require('mysql'); 

var db = require('./config/db');
var cors = require('cors'); //교차통신 모듈 호출

var conn = db.init();  //db 모듈 커넥션 실행
db.conn(conn); //db 연결 확인
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors())//교차통신 적용

var moviesRouter = require('./routes/movies');
app.use('/api/movies', moviesRouter);

const dbInfo = {
  host: 'localhost',
  user: 'root',
  password: 'Dbelddl4$',
  database: 'kmsql'
}

mysql.createConnection(dbInfo).connect((err)=>{
  if(err) {
    console.log("mysql connect error "+err);
  }else {
    console.log("mysql connect success");
  }
})

if(!db) {
  console.log("/config/db.js file not exists");
  process.exit(1);
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
