const express = require('express');
// const cors = require('cors');
const app = express();
const path = require('path');

// app.use(cors())
app.use(express.urlencoded());

// For all routes, log which file is requested/served.
app.use(function (req, res, next) {
    var filename = path.basename(req.url);
    var extension = path.extname(filename);
    if (extension === '.xml')
        res.setHeader('content-type', 'text/xml');
    console.log(`Serving file: ${filename}`);
    next();
});

// Serve views and assets.
app.use(express.static('dist'));

app.post('/password-update', function (req, res, next) {
	console.log(`GOT A POST`);
	console.log('req.body: ', req.body);
	res.send(`PASSWORD UPDATED: ${req.body.pw}`);
	next();
});

// Start the server.
const port = Number(process.argv[2] || 3334);
app.listen(port, () => {
    console.log('server is running on http://localhost' + (port === 80 ? '' : ':' + port));
});
