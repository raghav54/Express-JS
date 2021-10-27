var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.get('/name', function(req, res) {
 res.json({name: req.query.first + ' '+req.query.last});
});
