const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

module.exports.handler = serverless(app);

