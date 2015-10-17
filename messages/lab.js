//

function parse(){

	var jsondata = new XMLHttpRequest();
	jsondata.addEventListener("load", reqListener);
	jsondata.open("GET", "http://tuftsdev.github.io/comp20-jkaltman/messages/data.json", true);
	jsondata.send();
}

function reqListener () {

	var parsedObjects = JSON.parse(this.responseText);
	elem = document.getElementById("messages");

	for (count = 0; count < parsedObjects.length; count++) {
		elem.innerHTML += "<p>" +  parsedObjects[count]["content"] + " <span>" + parsedObjects[count]["username"] + "</span></p>";
	}
}