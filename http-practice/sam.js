"use strict";

const http = require("http");
const port = process.env.PORT || 8000;

const server = http.createServer(function(req, res) {
res.setHeader('content-type', 'text/plain');
res.end('hello world');
});

server.listen(port, function() {
console.log('we ready', port)
});
