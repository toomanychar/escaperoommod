/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/schwarze_tuer_pin.js"></script>

*/

	
var passwort = "13377";
var eingabe = window.prompt("Bitte PIN eingeben","");
if(eingabe != passwort) {
alert("Falscher PIN!");
} else {
document.location.href="6.0_Raum-schwarz.html";
}