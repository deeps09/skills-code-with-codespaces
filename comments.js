// create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var comments = require('./comments');

// Load the index.html file
var filePath = path.join(__dirname, 'index.html');

// create server
http.createServer(function (req, res) {
  if (req.url === '/google.com')
        return res.end('google.com');
    else return res.end('404');});
