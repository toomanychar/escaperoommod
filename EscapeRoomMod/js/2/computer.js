/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum1_computer.js"></script>

*/

	function passwort_eingeben() {
	var passwort = "C42Steffi5";
	var eingabe = window.prompt("Bitte Passwort eingeben","");
	if(eingabe != passwort) {
	alert("Falsches Passwort!");
	} else {
	document.location.href="2.1.2b_Login-Erfolgreich.html";
	}
}
