function CreateTable(r) {
	let table;
	const style =
		`<style>
body {display: flex; justify-content: center; align-items: center; height: 100vh; background: #fafafa}
#table {border-collapse: collapse; width: 400px; font-size: 1.1rem;}
.th, .td {text-align: left; padding: 8px; border: 1px solid #333333;}
.tr:nth-child(even) {background-color: #d4f2f6;}
</style>`;
	let tab = '\t'
	let eol = '\n'
	let firstPart = `<html lang="en">${eol}<table id="table">`
	let lastPart = `${eol}</table>${eol}</html>`
	let trs = `${eol}<tr class="tr">${eol}${tab}`

	let tre = `${eol}</tr>`
	let ths = '<th class="th">'
	let the = '</th>'
	let tds = '<td class="td">'
	let tde = '</td>'
	let header = ""
	let Keys = Object.keys(r[0]);
	let kl = Keys.length
	let Rows = Object.values(r);
	let rl = Rows.length
	header = header + trs
	for (let i = 0; i < kl; i++) {
		header = header + ths + Keys[i] + the
	}
	header = header + tre
	let rows = ""
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
