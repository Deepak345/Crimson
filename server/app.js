var express = require('express');
var mongoose = require('mongoose');

// routes
var routes = require('./lib/routes');

var app = express();

// mongoose setup
mongoose.connect('mongodb://localhost:27017/crimson');
var db = mongoose.connection;
db.once('open', function() {
  console.log("Connection to MongoDB succesful...");
}).on('error', function(error) {
  console.log("MongoDB connection error: ", error);
});

app.use('/', routes);

app.listen(3000, function() {
    console.log("Listening to port 3000...");
});