var express = require('express');
var app = express();
console.log("Hello World");
app.use('/public', express.static(__dirname + '/public'));
//MESSAGE_STYLE=uppercase - environment variable declaration
app.get('/json',function(req, res) {
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    res.json({"message": "HELLO JSON"});
  }
  else{
  res.json({"message": "Hello json"});
  }
})
