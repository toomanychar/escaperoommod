function setSaveCookie(raum, notizen, inventar, gamestate) {
	// raum, notizen, inventar, gamestate
	document.cookie = "";
}

function getSaveCookie() {
	let decodedCookie = decodeURIComponent(document.cookie);
	let saveElements = decodedCookie.split(';') // Raum, Notizen, Inventar, Gamestate
	
}
