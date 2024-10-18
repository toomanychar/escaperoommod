/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum3_computer.js"></script>

*/
	alert("Für das Zurücksetzen des Passworts müssen folgende 5 Fragen korrekt beantwortet werden! Beachte hierbei die Groß- und Kleinschreibung.");
	// Abfrage 1
	var abgleich = "Strom";
	var eingabe = window.prompt("Frage 1: Wofür steht der Buchstabe I in der Formel I=U/R?","");
	if (eingabe == abgleich) {
		alert("Korrekt!");
		
		// Abfrage 2
		var abgleich2 = "230";
		var eingabe2 = window.prompt("Frage 2: Welche Netzspannung kommt in Deutschland in den Haushalten an? (Als Angabe genügt die Zahl)","");
		if (eingabe2 == abgleich2) {
		alert("Korrekt!");
			
			// Abfrage 3
			var abgleich3 = "Binärsystem";
			var eingabe3 = window.prompt("Frage 3: Wie wird das 2er-System auch genannt?","");
			if (eingabe3 == abgleich3) {
			alert("Korrekt!");	
			
				// Abfrage 4
				var abgleich4 = "Sammelstelle";
				var eingabe4 = window.prompt("Frage 4: Auf mir gibt es Pfeile und Menschen. Welches Schild bin ich?","");
				if (eingabe4 == abgleich4) {
				alert("Korrekt!");	
				
					// Abfrage 5
					var abgleich5 = "Operational";
					var eingabe5 = window.prompt("Frage 5: Wofür steht das O in der Abkürzung OT?","");
					if (eingabe5 == abgleich5) {
					alert("Korrekt!");	
					document.location.href="4.2.1b_ComputerErfolg.html";
					}
					else
					{
					alert("Leider falsch, versuche es nochmal!");
					document.location.href="4.2.1_Schreibtisch.html";
					}
				
				}
				else
				{
				alert("Leider falsch, versuche es nochmal!");
				document.location.href="4.2.1_Schreibtisch.html";
				}
			
			}
			else
			{
			alert("Leider falsch, versuche es nochmal!");
			document.location.href="4.2.1_Schreibtisch.html";
			}
				
		}
		else
		{
		alert("Leider falsch, versuche es nochmal!");
		document.location.href="4.2.1_Schreibtisch.html";
		}
		
	}
	else
	{
	alert("Leider falsch, versuche es nochmal!");
	document.location.href="4.2.1_Schreibtisch.html";
	}
