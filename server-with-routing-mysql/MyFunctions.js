function CreateHTML(s) {
	return `<html style="font-family: sans-serif;"  lang="en"> 
	<body style="background: #f5f5f5; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;" >
	<form action=/Query method="POST">
	<button type=submit style="background: green; padding: 8px 16px; border-style: none; color: white; box-shadow: 0 0 10px 1px #666; border-radius: 2px; font-size: 1.1rem;">Run Query</button>
	<br><br>
	<textarea id=Sql name=Sql rows=5 cols=60 style="font-size: 1.1rem;">${s}</textarea>
	</form></body></html>`
}
exports.CreateHTML = CreateHTML

function CreateTable(r) {
	let table;
	const style =
		`<style>
#table {border-collapse: collapse; width: 50%; box-shadow: 0 0 10px 1px #888;}
#th, #td {text-align: left;padding: 8px; border: 1px solid #333333;}
#tr:nth-child(odd) {background-color: #ffffff;}
#tr:nth-child(even) {background-color: #d4f2f6;}
</style>`;
	const tab = '\t';
	const eol = '\n';
	const firstPart = `<html lang="en">${eol}<table id="table">`;
	const lastPart = `${eol}</table>${eol}</html>`;
	const trs = `${eol}<tr id="tr">${eol}${tab}`;
	const tre = `${eol}</tr>`;
	const ths = '<th id="th">';
	const the = '</th>';
	const tds = '<td id="td">';
	const tde = '</td>';
	let header = "";
	const Keys = Object.keys(r[0]);
	const kl = Keys.length;
	const Rows = Object.values(r);
	const rl = Rows.length;
	header = header + trs
	for (let i = 0; i < kl; i++) {
		header = header + ths + Keys[i] + the
	}
	header = header + tre
	let rows = "";
	for (let i = 0; i < rl; i++) {
		rows = rows + trs;
		for (let j = 0; j < kl; j++) {
			rows = rows + tds + Rows[i][Keys[j]] + tde
		}
		rows = rows + tre;
	}
	table =`${firstPart}${style}${header}${rows}${lastPart}`
	return table
}
exports.CreateTable = CreateTable
