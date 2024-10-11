/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum2_schrank.js"></script>

*/
	var passwort = "GBRSL";
	<!-- Das Rätsel stammt aus dem Spiel "The Hobbit" aus dem Jahr 2003, bei welchem in Seestadt bestimmte Flaschen in eine korrekte Reihenfolge gebracht werden müssen. Quelle: https://www.youtube.com/watch?v=KvP1P5lhV5A -->
	var eingabe = window.prompt("Hier befindet sich ein Farben-Schloss mit einer Notiz. Es scheint ein Rätsel zu sein. Hier steht folgendes: Gelb steht links von Rot und Blau, aber nicht neben Schwarz. Lila kann nur neben Schwarz stehen, nirgendwo sonst. Schwarz steht rechts von Gelb. Hinweis: Für die Eingabe reicht der Anfangsbuchstabe (Beispielhafte Eingabe wäre: GLRBS)","");
	if(eingabe != passwort) {
	alert("Falsches Passwort!");
	} else {
	document.location.href="3.2_Puzzle.html";
	}