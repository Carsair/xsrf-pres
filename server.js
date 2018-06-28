var express = require('express');
var cookieParser = require('cookie-parser');
// var cors = require('cors');
var app = express();
var path = require('path');
var password = '12345';
var loggedIn = false;

// app.use(cors())
app.use(express.urlencoded());
app.use(cookieParser());

// For all routes, log which file is requested/served.
app.use(function (req, res, next) {
    var filename = path.basename(req.url);
		var extension = path.extname(filename);
    if (extension === '.xml')
        res.setHeader('content-type', 'text/xml');
    console.log(`Serving file: ${filename}`);
    console.log(`logged_in?: ${req.cookies.logged_in}`);
    console.log(`password?: ${password}`);
    next();
});

// Serve views and assets.
app.use(express.static('dist'));

app.post('/log-in', function (req, res, next) {
	if (req.body.pw === password) {
		loggedIn = '56789';
		res.cookie('logged_in', loggedIn, { maxAge: 10000 });
		console.log("successful log in");
		res.send(`LOGGED IN: ${password}, ${loggedIn}`);
	} else {
		console.log("failure to log in");
		res.send(`FAILED TO LOG IN: ${password}, ${loggedIn}`);
	}
});

app.post('/update-password', function (req, res, next) {
	if (req.cookies.logged_in === loggedIn) {
		password = req.body.pw;
		console.log("successful update PW");
		res.send(`PASSWORD UPDATED: ${password}, ${loggedIn}`);
	} else {
		console.log("failed to update PW");
		res.send(`FAILED TO UPDATE PASSWORD: ${password}, ${loggedIn}`);
	}
});

// Start the server.
var port = Number(process.argv[2] || 3334);
app.listen(port, () => {
    console.log('server is running on http://localhost' + (port === 80 ? '' : ':' + port));
});
