function CreateBuildQuery(q) {
	var html =
	`<html><head><script>
function CreateSQL() {
	let TauluV = document.forms["Query"]["Taulu"].value;
	let EnimiV = document.forms["Query"]["Enimi"].value;
	let EnimiN = document.forms["Query"]["Enimi"].name;
	let SnimiV = document.forms["Query"]["Snimi"].value;
	let SnimiN = document.forms["Query"]["Snimi"].name;
	let PituusV = document.forms["Query"]["Pituus"].value;
	let PituusN = document.forms["Query"]["Pituus"].name;
	let PainoV = document.forms["Query"]["Paino"].value;
	let PainoN = document.forms["Query"]["Paino"].name;
	let SpV = document.forms["Query"]["Sp"].value;
	let SpN = document.getElementById("Sp").name
	if (SpV != "") {
		SpV   = ' = ' + "'" + SpV + "'"
	}
	let FieldsV = [EnimiV, SnimiV, PituusV, PainoV, SpV]
	let FieldsN = [EnimiN, SnimiN, PituusN, PainoN, SpN]
	let fl = FieldsV.length
	for (let i = 0; i < fl; i++) {
		if (FieldsV[i] != "") {
			FieldsV[i] = " " + FieldsN[i] + " " + FieldsV[i]
		}
	}
	let SelectFrom = 'select * from ' + TauluV
	let Where = ""
	for (let i = 0; i < fl; i++) {
		Where = Where + FieldsV[i]
	}	
	if (Where != "") {
		Where = "\\nwhere" + Where
	}
	let sql = SelectFrom + Where
	document.getElementById("Sql").innerHTML = sql

}
</script></head>
<form name="Query" action="/Query" method="POST">
<table>
<tr>
	<td>
		<label for="Taulu">Taulu</label>
		<input type="text" id="Taulu" name="Taulu" value="Henkilo">
	</td>
	<td>
		<label for="Enimi">Enimi</label>
		<input type="text" id="Enimi" name="Enimi" value="">
	</td>
	<td>
		<label for="Snimi">Snimi</label>
		<input type="text" id="Snimi" name="Snimi" value="">
	</td>
	<td>
		<label for="Pituus">Pituus</label>
		<input type="text" id="Pituus" name="Pituus" value="">
	</td>
	<td>
		<label for="Paino">Paino</label>
		<input type="text" id="Paino" name="Paino" value="">
	</td>
</tr>
<tr>
	<td>
		<label>Sp</label>
		<label for="Nainen">Nainen</label>
		<input type="radio" id = "Sp" name="Sp" value="N"> 
		<label for="Mies">Mies</label>
		<input type="radio" id = "Sp" name="Sp" value="M"> 
	</td>
</tr>
<tr>
	<td>
		<input type="button" onclick="CreateSQL()" value="CreateSQL">
		<input type="submit" value="SendSQL">
		<input type="reset" value="Reset">
	</td>
</tr>
</table>
	<textarea id=Sql name=Sql rows=5 cols=120>${q}</textarea>
</form></html>`
return html
}
exports.CreateBuildQuery = CreateBuildQuery
