/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum4_computer.js"></script>

*/
	var passwort = "bello-gelb-entchen";
	var eingabe = window.prompt("Bitte Passwort eingeben","");
	if(eingabe != passwort) {
	alert("Falsches Passwort!");
	} else {
	document.location.href="5.2_verstick-login.html";
	}