const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const pingRouter = require("./routes/ping");

/*Register and SignIn*/
const register = require("./routes/auth/register");
const signin = require("./routes/auth/signin");

/*Friend List*/
const friendList = require("./routes/friendlist/friendList");

const { json, urlencoded } = express;
/*Friend requests*/
const friend = require("./routes/friends/friend");

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/ping", pingRouter);
/*Register and SignIn*/
app.use("/api", register);
app.use("/api", signin);

/*FriendList*/
app.use("/api/friendList", friendList);
/*Friend Requests*/
app.use("/api", friend);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
