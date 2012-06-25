var http = require('http');
var port = process.env.C9_PORT;
http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello azure\n');
}).listen(port);