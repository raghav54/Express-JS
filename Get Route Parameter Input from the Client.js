var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.get('/:word/echo', function(req, res) {
 res.send({echo: req.params.word});
});
