var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({time: req.time});
});
