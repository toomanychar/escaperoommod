/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum1_computer.js"></script>

*/
	var passwort = "C42Steffi5";
	var eingabe = window.prompt("Bitte Passwort eingeben","");
	if(eingabe != passwort) {
	alert("Falsches Passwort!");
	} else {
	document.location.href="2.2_Login-Erfolgreich.html";
	}