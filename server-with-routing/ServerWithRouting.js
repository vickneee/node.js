const http = require('http')
const sqlite3 = require('sqlite3').verbose();
sqlite3.OPEN_READWRITE = undefined;
const qs = require('querystring');
const mf = require('./MyFunctions.js');
const database = '/Users/victoriavavulina/Library/CloudStorage/OneDrive-Personal/Kurssit/Node/Node.db';
const db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected.')
});
const sql = 'select Kunta, Asukas from Kunta where Kunta = ?';
let NoDataFound = false;
let Kunta = '';
let Asukas = '';
const hostname = 'localhost';
const port = 8500;
function reqListener(req, res) {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		Kunta = '';
		res.write(mf.Form(Kunta));
		return res.end();
	}
	if (url === '/Query' && method === 'POST') {
		let body = [];
		req.on('data', (chunk) => {
		body.push(chunk);
	})
	req.on('end', () => {
		body = Buffer.concat(body).toString();
		const post = qs.parse(body);
		Kunta = post.Kunta;
		db.get(sql, [Kunta], (err, row) => {
			if (err) {
				return console.error(err.message);
			}
			if (row != null) {
				NoDataFound = true;
				Kunta = row.Kunta;
				Asukas = row.Asukas;
				console.log(Kunta + '/t' + Asukas);
				res.write(mf.Result(Kunta, Asukas));
				console.log(mf.Result);
				return res.end();
			}
			else {
				NoDataFound = false;
				res.write(mf.Form(Kunta));
				console.log(`No data found with the Kunta ${Kunta}`)
			}
		});
	});
}
}

const server = http.createServer(reqListener);
server.listen(port, hostname, () => {
	console.log(`Server running at http: // ${hostname}:${port}/`);
});
