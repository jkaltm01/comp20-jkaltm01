// lab.js -- opens JSON file using XMLHttpRequest, parses JSON data,
// 		     and outputs messages in HTML

function parse(){

	var jsondata = new XMLHttpRequest();
	jsondata.addEventListener("load", reqListener);
	jsondata.open("GET", "http://messagehub.herokuapp.com/messages.json", true);
	jsondata.send();
}

function reqListener(){

	var parsedObjects = JSON.parse(this.responseText);
	elem = document.getElementById("messages");

	for (count = 0; count < parsedObjects.length; count++) {
		elem.innerHTML += "<p>" +  parsedObjects[count]["content"] + " <span>" + parsedObjects[count]["username"] + "</span></p>";
	}
}