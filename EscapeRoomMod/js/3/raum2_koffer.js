/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum2_koffer.js"></script>

*/

function passwort_eingeben() {
	var passwort = "1289";
	var eingabe = window.prompt("Bitte Passwort eingeben","");
	if(eingabe != passwort) {
	alert("Falsches Passwort!");
	} else {
	document.location.href="3.1.3b_Koffer-Login2.html";
	}
}
