var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('Express server started on port %s', port);
});

app.get('/', function(req, res){
    res.sendFile(dist + '/index.html');
});
