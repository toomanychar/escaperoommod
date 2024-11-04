class Room {
	constructor(elements, hasNotizen, hasInventory) {
		this.elements = elements;
		this.hasNotizen = hasNotizen;
		this.hasInventory = hasInventory;
	}
	
	// get HTML code of this object
	getHTML() {
		var html = ""
		
		// ...
		
		return html;
	}
}

class szeneElement {
	constructor(hasLeft, hasUp, hasRight, hasDown, leftLink, upLink, rightLink, downLink, imagePath, imageWidth, imageHeight, hasInventory, PAC_Elements) {
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
	getHTML(tabs) {
		var html = "";
		
		html += "\t".repeat(tabs) + "<center>\n";
		html += "\t".repeat(tabs) + "<div class=\"szene\" style=\"width:" + imageWidth + "px; height:" + imageHeight + "px; background-image:url(images/" + imagePath + "); background-size: cover\">\n"

		if (this.left) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"right:90%, margin-right: -50px; top:50%; margin-top: -25px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.leftLink + "\" role=\"button\"> &#9664; Links </a>\n"
			html += "\t".repeat(tabs + 1) + "</div>\n"
		}
		if (this.up) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"right:50%, margin-right: -75px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.upLink + "\" role=\"button\"> &#9650; Vorwärts </a>\n"
			html += "\t".repeat(tabs + 1) + "</div>\n"
		}
		if (this.right) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"left:90%, margin-left: -50px; top:50%; margin-top: -25px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.rightLink + "\" role=\"button\"> &#9654; Rechts </a>\n"
			html += "\t".repeat(tabs + 1) + "</div>\n"
		}
		if (this.down) {
			html += "\t".repeat(tabs + 1) + "<div class=\"navigation\" style=\"right:50%, margin-right: -75px; top:90%; margin-top: -25px\">\n"
			html += "\t".repeat(tabs + 2) + "<a class=\"btn btn-primary btn-lg\" href=\"" + this.downLink + "\" role=\"button\"> &#9660; Zurück</a>\n"
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
	constructor(imagePath, imageWidth, imageHeight, isCentered) {
		this.imagePath = imagePath;
		this.imageWidth = imageWidth;
		this.imageHeight = imageHeight;
		this.isCentered = isCentered;
	}
	
	// get HTML code of this object
	getHTML(tabs) {
		var html = "";
		
		if this.isCentered { html += "\t".repeat(tabs) + "<center>\n"; }
		html += "\t".repeat(tabs) + "<img src =\"" + this.imagePath + "\" width=\"" + this.imageWidth + "\" height=\"" + this.imageHeight + "\">";
		if this.isCentered { html += "\t".repeat(tabs) + "</center>"; }
		
		return html;
	}
}


class textElement {
	constructor(text, isCentered) {
		this.text = text;
		this.isCentered = isCentered;
	}
	
	// get HTML code of this object
	getHTML(tabs) {
		var html = "";
		
		if this.isCentered { html += "\t".repeat(tabs) + "<center>\n"; }
		html += "\t".repeat(tabs);
		html += this.text.replace('\n', "<br>\n" + "\t".repeat(tabs));
		html += "\n"
		if this.isCentered { html += "\t".repeat(tabs) + "</center>"; }
		
		return html;
	}
}

class PAC_Element {
	constructor(linkOrFunc, link, func, width, height, marginTop, marginLeft) {
		
	}
	
	
	// get HTML code of this object
	getHTML(tabs) {
		var html = "";
		
		// html += "\t".repeat(tabs) + "..."
		
		return html;
	}
}
