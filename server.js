const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Initialize Express app
const app = express();

// Define the SSL certificate paths
const sslOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem')
};

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, Let\'s Encrypt SSL!');
});

// Create an HTTPS server
https.createServer(sslOptions, app).listen(443, () => {
    console.log('Secure server running on https://yourdomain.com');
});

