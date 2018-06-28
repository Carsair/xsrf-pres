const express = require('express');
const app = express();
const path = require('path');

// Serve views and assets.
app.use(express.static('evil-dist'));

// Start the server.
const port = Number(process.argv[2] || 3335);
app.listen(port, () => {
    console.log('server is running on http://localhost' + (port === 80 ? '' : ':' + port));
});
