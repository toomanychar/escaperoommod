/* 	
	Jan-Michael Müller
	21.05.2022
	Der Code wurde vom Autor Werner-Zenk kopiert und an den eigenen Anforderungen angepasst,
	siehe dazu folgende Quelle: https://werner-zenk.de/scripte/localstorage.php

	<!-- Notizen Script einbinden -->
	<script src="js/notizen.js"></script>

*/

/* 	
	Tymur Nazarenko
	03.10.2024
	Der Code wurde an die eigenen Anforderungen nochmals angepasst
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
	 window.localStorage.setItem("notizen", notizen); // Notizen im Local Storage speichern
	}

	function notizen_lesen() {
	 document.getElementById("notizen").value = window.localStorage.getItem("notizen"); // Notizen aus dem Local Storage abrufen
	}


