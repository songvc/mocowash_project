var express = require('express');
var	path 		=	require('path');
var nodemailer = require('nodemailer');
var parser = require('body-parser');

var app = express();
var dist = path.join(__dirname,'dist');
var port = process.env.PORT || 3000;

app.use(parser.json());
app.use(express.static(dist));

app.listen(port, function(){
	console.log('Express server started on port %s', port);
});

app.post('/contact', function(req,res) {
	// console.log(req.headers);
	// console.log(req.body);      // your JSON
	// console.log(req.body.name);      // your JSON
	// console.log(req.body.number);      // your JSON
	// console.log(req.body.email);      // your JSON
	// console.log(req.body.message);      // your JSON

	var transporter = nodemailer.createTransport('smtps://songvc%40gmail.com:pass@smtp.gmail.com');

	var mailOptions = {
		from: req.body.name + '&lt;' + req.body.email + '&gt;',
		to: 'songvc@gmail.com',
		subject: 'Webiste contact form',
		text: req.body.message
	}

	transporter.sendMail(mailOptions, function(err, res) {
		//Email not sent
		if (err) {
			console.log(err);
			console.log('error!');
		}
		//Yay!! Email sent
		else {
			console.log('email sent!!');
		}
	})

	// res.send(req.body);    // echo the result back

})
