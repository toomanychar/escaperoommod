
class Room {
	constructor(elements=[new szeneElement()], hasNotizen=true, hasInventory=false, eonBild=true) {
		this.elements = elements;
		this.hasNotizen = hasNotizen;
		this.hasInventory = hasInventory;
	}
	
	// Update own variables and those of children based on checkbox
	update() {
		this.hasNotizen = document.getElementById("hasNotizen").checked;
		this.hasInventory = document.getElementById("hasInventory").checked;
		
		
		for (let i = 0; i < this.elements.length; i++) {
			elements[i].update();
		}
	}
	
	// get HTML code of this object
	getHTML() {
		var html = "";
		
		html += `<!DOCTYPE html>
<html>
	<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title>E.ON IT-Security Escape Room</title> <!-- Tab-Name -->
	<!-- Bootstrap -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	</head>

	<body>
	<br><br>
	<div class="container"> <!-- START div container -->

	<!-- Wenn JavaScript deaktiviert wird, wird eine Fehlermeldung angezeigt, und alle interaktive Objekten werden ausgeschaltet -->
	<noscript>
	<h3 class="alert alert-danger">
	<center>
	JavaScript ist deaktiviert! <br><br>
	Um das Escape-Room spielen zu können, müssen Sie JavaScript in den Einstellungen Ihres Browsers für diese Webseite aktivieren!
	</center>
	</h3>
	<style type="text/css">
		.interactable, .btn, .btn-pac, .navigation {
			display: none;
		}
	</style>
	<br>
	</noscript>
	
	<!-- Wenn localStorage IRGENDWIE deaktiviert wird, wird diese Fehlermeldung angezeigt -->
	<h3 class="alert alert-danger" id="localStorageNotifier" style="display:none">
	<center>
		localStorage ist deaktiviert! <br><br>
		Um das Escape-Room spielen zu können, müssen Sie localStorage in den Einstellungen Ihres Browsers für diese Webseite aktivieren!
	</center>
	</h3>
	<script src="js/localStorageCheck.js"></script>



	<div class="jumbotron">
	
	`

	if (this.eonBild) {
		html += `	<!-- E.ON Bild -->
	<img src="images/eon-logo.svg"> <!-- Quelle: https://www.eon.com/content/dam/eon/eon-com/eon-com-assets/content/general/logo/logo-eon-red.svg -->

`}

	html += `	<br><br><br>\n\n`
	
	for (let i = 0; i < this.elements.length; i++) {
		html += this.elements[i].getHTML(1);
		html += "<br>\n\n"
	}
	
	if (this.hasInventory) {
		// ...
	}

	if (this.hasNotizen) {
	html += `	<!-- Notizen -->
	<center>
		<iframe src="IFRAME_Notizbuch.html" height="332" width="450" title="Notizen"></iframe>
	</center>

`}

	html += `	<!-- Timer Script einbinden -->
	<script src="js/time.js"></script>
	<!-- Timer Script anzeigen -->
	<div id="total-time-left" align="right"> </div>

`
	html += `	</div>
	</div> <!-- ENDE div container -->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	</body>
</html>`
		return html;
	}
}

class szeneElement {
	constructor(hasLeft=true, hasUp=true, hasRight=true, hasDown=true, leftLink="", upLink="", rightLink="", downLink="", imagePath="GRAFIK.png", imageWidth=1000, imageHeight=500, hasInventory=false, PAC_Elements=[]) {
		this.left = hasLeft;
		this.up = hasUp;
		this.right = hasRight;
		this.down = hasDown;
		this.leftLink = leftLink;
		this.upLink = upLink;
		this.rightLink = rightLink;
		this.downLink = downLink;
		this.imagePath = imagePath;
		this.imageWidth = imageWidth;
		this.imageHeight = imageHeight;
		this.inventory = hasInventory;
		this.PAC_Elements = PAC_Elements;
	}
	
	// get HTML code of this object
	getHTML(tabs=0) {
		var html = "";
		
		html += "\t".repeat(tabs) + "<center>\n";
		html += "\t".repeat(tabs) + "<div class=\"szene\" style=\"width:" + this.imageWidth + "px; height:" + this.imageHeight + "px; background-image:url(images/" + this.imagePath + "); background-size: cover\">\n"

		if (this.left) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"right:90%; margin-right: -50px; top:50%; margin-top: -25px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.leftLink + "\" role=\"button\"> ◀ Links </a>\n"
			html += "\t".repeat(tabs + 1) + "</div>\n"
		}
		if (this.up) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"right:50%; margin-right: -75px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.upLink + "\" role=\"button\"> ▲ Vorwärts </a>\n"
			html += "\t".repeat(tabs + 1) + "</div>\n"
		}
		if (this.right) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"left:90%; margin-left: -50px; top:50%; margin-top: -25px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.rightLink + "\" role=\"button\"> Rechts ▶</a>\n"
			html += "\t".repeat(tabs + 1) + "</div>\n"
		}
		if (this.down) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"right:50%; margin-right: -75px; top:90%; margin-top: -25px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.downLink + "\" role=\"button\"> ▼ Zurück</a>\n"
			html += "\t".repeat(tabs + 1) + "</div>\n"
		}
		if (this.PAC_Elements.length > 0) {
			html += "\n";
			for (let i = 0; i < this.PAC_Elements.length; i++) {
				html += this.PAC_Elements[i].getHTML(tabs + 1);
				html += "\n";
			}
		}
		
		if (this.inventory) {
			// ...
		}

		html += "\t".repeat(tabs) + "</div>\n"
		html += "\t".repeat(tabs) + "</center>";
		
		return html;
	}
}

class imageElement {
	constructor(imagePath="GRAFIK.png", imageWidth=1000, imageHeight=500, isCentered=true) {
		this.imagePath = imagePath;
		this.imageWidth = imageWidth;
		this.imageHeight = imageHeight;
		this.isCentered = isCentered;
	}
	
	// get HTML code of this object
	getHTML(tabs=0) {
		var html = "";
		
		if (this.isCentered) { html += "\t".repeat(tabs) + "<center>\n"; }
		html += "\t".repeat(tabs) + "<img src =\"" + this.imagePath + "\" width=\"" + this.imageWidth + "\" height=\"" + this.imageHeight + "\">";
		if (this.isCentered) { html += "\t".repeat(tabs) + "</center>"; }
		
		return html;
	}
}


class textElement {
	constructor(text="", isCentered=true) {
		this.text = text;
		this.isCentered = isCentered;
	}
	
	// get HTML code of this object
	getHTML(tabs=0) {
		var html = "";
		
		if (this.isCentered) { html += "\t".repeat(tabs) + "<center>\n"; }
		html += "\t".repeat(tabs);
		html += this.text.replace('\n', "<br>\n" + "\t".repeat(tabs));
		html += "\n"
		if (this.isCentered) { html += "\t".repeat(tabs) + "</center>"; }
		
		return html;
	}
}

class PAC_Element {
	constructor(linkOrFunc=false, link="", func="", width=10, height=10, marginTop=50, marginLeft=50) {
		this.linkOrFunc = linkOrFunc; // False = Link, True = Function
		this.link = link;
		this.func = func;
		this.width = width;
		this.height = height;
		this.marginTop = marginTop;
		this.marginLeft = marginLeft;
		
	}
	
	
	// get HTML code of this object
	getHTML(tabs=0) {
		var html = "";
		
		// html += "\t".repeat(tabs) + "..."
		
		return html;
	}
}


























// TODO: MAKE OBJECTS HAVE IDS WHICH CORRESPOND TO THEIR IDS IN THE MENU





theRoom = new Room()



function update() {
	theRoom.update()
}


function render() {
	document.getElementById("inThisDiv").innerHTML = theRoom.getHTML();
}

function download() {
	var textToSave = theRoom.getHTML();
	
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'ROOM.html';
	hiddenElement.click();
}







