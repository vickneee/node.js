var mysql = require('mysql');
var html =`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h1>Hello from Server</h1>
<p>It is nice to code in JS & Node</p>
</body>
</html>
`
exports.html = html
exports.myDateTime = function () {
	return Date();
};

function CreateTable(r) {
	var table
	var style =
`<style>
#table {border-collapse: collapse;width: 100%;}
#th, #td {text-align: left;padding: 8px;border: 1px solid #dddddd;}
#tr:nth-child(even){background-color: #D6EEEE;}
</style>`
	var tab = '\t'
	var eol = '\n'
	var firstpart = `<html>${eol}<table id="table">`
	var lastpart = `${eol}</table>${eol}</html>`
	var trs = `${eol}<tr id="tr">${eol}${tab}`
	var tre = `${eol}</tr>`
	var ths = '<th id="th">'
	var the = '</th>'
	var tds = '<td id="td">'
	var tde = '</td>'
	var header = ""
	var Keys = Object.keys(r[0]);
	var kl = Keys.length 
	var Rows = Object.values(r);
	var rl = Rows.length
	header = header + trs
	for (i = 0; i < kl; i++) {
		header = header + ths + Keys[i] + the
	}
	header = header + tre
	var rows = ""
	for (i = 0; i < rl; i++) {
		rows = rows + trs;
		for (j = 0; j < kl; j++) {
			rows = rows + tds + Rows[i][Keys[j]] + tde
		}
		rows = rows + tre;
	}
	table =`${firstpart}${style}${header}${rows}${lastpart}`
	return table
}
exports.CreateTable = CreateTable
