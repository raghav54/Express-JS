var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/name", function(req, res) {
  res.json({name: req.body.first + ' '+req.body.last});
});










 module.exports = app;
