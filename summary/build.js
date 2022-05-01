var build = function() {
	let s = "";
	
	for (let i in data) {
		s += '<tr>' +
		'<td><li><a href="show.html?' + data[i].n + '" target="_blank">' + data[i].title.split(" ")[0] + '</a></li></td>' +
		'<td><a href="show.html?' + data[i].n + '" target="_blank">' + data[i].title.split(" ").slice(1).join(" ") + '</a></td>' +
		'</tr>';
	}

	document.getElementById("lister").innerHTML = "<table>" + s + "</table>";
}