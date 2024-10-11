/*
	Einbinden des Scripts: 
	<!-- PW-Abfrage Script einbinden -->
	<script src="js/raum2_handy.js"></script>

*/
alert("Für den Zugang zum Handy müssen offensichtlich vier Fragen richtig beantwortet werden.");
	// Abfrage 1
	var abgleich = "2";
	var eingabe = window.prompt("Frage 1: Wie viele Schlüssel hat die asymmetrische Verschlüsselung? (Angabe als Zahl)","");
	if (eingabe == abgleich) {
		alert("Korrekt!");
		
		// Abfrage 2
		var abgleich2 = "Steganographie";
		var eingabe2 = window.prompt("Frage 2: Wie heißt der Fachbegriff für das Verstecken einer Information in einer unverfänglichen Nachricht?(XXXXXXXXXXXXXX)" ,"");
		if (eingabe2 == abgleich2) {
		alert("Korrekt!");
			
			// Abfrage 3
			var abgleich3 = "Kerckhoffs";
			var eingabe3 = window.prompt("Frage 3: Welches Prinzip basiert auf der Geheimhaltung des Schlüssels, nicht aber auf der Geheimhaltung des Algorithmus eines kryptografischen Systems? (XXXXXXXXXX-Prinzip)","");
			if (eingabe3 == abgleich3) {
			alert("Korrekt!");	
			
				// Abfrage 4
				var abgleich4 = "Caesar";
				var eingabe4 = window.prompt("Frage 4: Wie wird ein bekanntes und sehr altes symmetrisches Verschlüsselungsverfahren genannt, bei dem jeder Buchstabe des Alphabets um eine bestimmte Anzahl zyklisch verschoben wird (oft drei Stellen)?  (XXXXXX-Chiffre)","");
				if (eingabe4 == abgleich4) {
				alert("Korrekt!");	
				document.location.href="3.2_Handy-Login.html";
				
				}
				else
				{
				alert("Leider falsch, versuche es nochmal!");
				document.location.href="3.2_Schreibtisch.html";
				}
			
			}
			else
			{
			alert("Leider falsch, versuche es nochmal!");
			document.location.href="3.2_Schreibtisch.html";
			}
				
		}
		else
		{
		alert("Leider falsch, versuche es nochmal!");
		document.location.href="3.2_Schreibtisch.html";
		}
		
	}
	else
	{
	alert("Leider falsch, versuche es nochmal!");
	document.location.href="3.2_Schreibtisch.html";
	}