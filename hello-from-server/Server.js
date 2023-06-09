"use strict";
const http = require('http');
const mf = require('./MyFunctions');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.write(mf.html);
	res.end();
});
server.listen(port, hostname, () => {
	console.log(`Server running at https://${hostname}:${port}`);
});
