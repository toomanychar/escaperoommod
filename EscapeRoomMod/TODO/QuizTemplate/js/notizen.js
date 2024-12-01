/* 	
	<!-- Notizen Script einbinden -->
	<center>
		<iframe src="IFRAME_Notizbuch.html" height="332" width="450" title="Notizen"></iframe>
	</center>
	<script src="js/notizen.js"></script>
*/

	window.onload = notizen_lesen; // Notizen werden automatisch geladen
	
	let notizen_timer;
	const notizen_input = document.getElementById("notizen");
	notizen_input.addEventListener("keyup", function (e) { // Whenever the user types anything into the Notizen 
		// 1. Clear the notizen-timer if it has not fired yet
		clearTimeout(notizen_timer);
		// Set a new notizen-timer, that will save the Notizen if it is not cleared within 100 ms
		notizen_timer = setTimeout(() => {
			notizen_speichern()
		}, 100);
	});

	function notizen_speichern() {
	 var notizen = document.getElementById("notizen").value;
//	 notizen = notizen.replace(';', ':,'); // Da ; fuer das Speichern genutzt wird, darf es in den Notizen nicht vorkommen
	 window.localStorage.setItem("notizen", notizen); // Notizen im Local Storage speichern
	}

	function notizen_lesen() {
	 document.getElementById("notizen").value = window.localStorage.getItem("notizen"); // Notizen aus dem Local Storage abrufen
	}
