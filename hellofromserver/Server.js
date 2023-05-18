const http = require('http');
var mf = require('./MyFunctions');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.write(mf.html);
	res.end();
});
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
