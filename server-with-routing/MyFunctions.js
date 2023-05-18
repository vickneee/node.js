function Form (Kunta) {
	const f = `<!DOCTYPE html>
	<html lang="en"> 
	<style> table th, td {border: 1px solid black;} </style>
	<head><meta charset="UTF-8"><title>Kunta</title></head>
	<body>
	<table>
	<form action="/Query" method="POST">
	<tr>
	<td>Kunta:</td> <td><input type="text" name="Kunta" value=${Kunta}></td>
	<td><button type="submit">Send</button></td>
	</tr>
	</form>
	</table></body>
	</html>`;
	return (f)
}
exports.Form = Form

function Result (Kunta, Asukas) {
	const r =
		`<!DOCTYPE html>
	<html lang="en">
	<style> table th, td {border: 1px solid black;} </style>
	<head><meta charset="UTF-8"><title>Kunta Asukas</title></head>
	<body>
	<table>
	<form action="/Query" method="POST">
	<tr>
	<td>Kunta:</td> <td><input type="text" name="Kunta" value=${Kunta}></td>
	<td><button type="submit">Send</button></td>
	</tr>
	</form>
	</table></body>
	<br>
	<table>
	<tr>
	<th>Kunta</th> <th>Asukas</th>
	</tr>
	<tr>
	<td>${Kunta}</td> <td>${Asukas}</td>
	</tr>
	</table>
	</html>`;
	return (r)
}	
exports.Result = Result
