var express = require('express');
var app = express();
console.log("Hello World");
app.use('/public', express.static(__dirname + '/public'));

app.get('/json',function(req, res) {
  res.json({"message": "Hello json"});
})





 module.exports = app;
