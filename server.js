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
	console.log(req);
	console.log(req.body);
	// var mailOpts, smtpTrans;
	//
	// smtpTrans = nodemailer.createTransport('SMTP', {
	// 	service: 'Gmail',
	// 	auth: {
	// 		user: 'songvc@gmail.com',
	// 		pass: 'application-specific-password'
	// 	}
	// });
	//
	// mailOpts = {
	// 	from: req.body.user + '&lt;' + req.body.email + '&gt;',
	// 	to: 'songvc@gmail.com',
	// 	subject: 'Webiste contact form',
	// 	text: req.body.message
	// }
	//
	// smtpTrans.sendMail(mailOpts, function(err, res) {
	// 	//Email not sent
	// 	if (error) {
	// 		res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
	// 	}
	// 	//Yay!! Email sent
	// 	else {
	// 		res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
	// 	}
	// })

})
