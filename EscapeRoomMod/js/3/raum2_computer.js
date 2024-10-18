/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum2_computer.js"></script>

*/
function passwort_eingeben() {
	var passwort = "1783";
	var eingabe = window.prompt("Bitte die PIN eingeben","");
	if(eingabe != passwort) {
	alert("Falsche PIN!");
	} else {
	document.location.href="3.1.2b_Computer-Login.html";
	}
}
