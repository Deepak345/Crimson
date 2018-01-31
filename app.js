var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require("express-session");
// routes
var routes = require('./lib/routes');

var app = express();

// mongoose setup
mongoose.connect('mongodb://localhost:27017/crimson' , { useMongoClient: true });
var db = mongoose.connection;
db.once('open', function () {
  console.log("Connection to MongoDB succesful...");
}).on('error', function (error) {
  console.log("MongoDB connection error: ", error);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(session({
  path: '/',
  secret: 'very secret',
  saveUninitialized: false,
  resave:false
}));

app.use('/', routes);

app.use(express.static(__dirname + '/client'));

app.listen(3000, function () {
  console.log("Listening to port 3000...");
});