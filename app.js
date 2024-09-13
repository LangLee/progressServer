import createError from "http-errors";
import express from "express";
require('dotenv').config();
import path from "path";
import cookieParser from "cookie-parser";
// import session from "express-session";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import booksRouter from "./routes/books";
import groupsRouter from "./routes/groups";
import appRouter from "./routes/app";
import aiRouter from "./routes/ai";
import wordRouter from "./routes/word";
import noteRouter from "./routes/note";
import messageRouter from "./routes/message";
import fileRouter from "./routes/file";
import connectDB from "./model/db";
import promptRouter from "./routes/prompt";
import verificationRouter from "./routes/verification";
import cors from "cors";
import "./websocket";
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// const origins = process.env.CORS_ORIGIN.split(',');
app.use(cors(
  {
    origin: function (origin, callback) {
      // 允许所有origins
      console.log(origin);
      callback(null, true);
    },
    credentials: true
  }
));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
// 设置session中间件
// app.use(session({
//   secret: 'giraffe', // 用于签名session ID的密钥
//   resave: false,             // 强制保存session即使它没有被修改
//   saveUninitialized: true,  // 强制保存未初始化的session
//   cookie: { 
//       secure: false,
//       maxAge: 1000 * 60 * 5  // 设置cookie的过期时间，这里是5分钟
//   }
// }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/groups', groupsRouter);
app.use('/ai', aiRouter);
app.use('/app', appRouter);
app.use('/word', wordRouter);
app.use('/note', noteRouter);
app.use('/message', messageRouter);
app.use('/file', fileRouter);
app.use('/prompt', promptRouter);
app.use('/verification', verificationRouter);

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
// db
connectDB();
export default app;
