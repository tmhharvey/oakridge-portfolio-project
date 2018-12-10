var express = require("express");
var path = require("path");
var ejs = require("ejs");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("server listening on port:" + port);
});
module.exports = app;