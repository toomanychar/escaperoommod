// this part of the code connects previous game progress and new games. 

function checkProgress() {
	room = window.localStorage.getItem("progress");
	if (room) {
		document.getElementById("progressNotifier").style.display = "";
		document.getElementById("progressFortsetzen").href = room;
		document.getElementById("disableThisIfProgress").style.display = "none";
	}
}

function setProgress(room) {
	window.localStorage.setItem("progress", room);
}


function resetAllProgress() {
	window.localStorage.clear();
}
