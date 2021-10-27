var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.use( 
function(req, res, next) {
  console.log(req.method + ' '+req.path+' - '+req.ip);
  next();
});
