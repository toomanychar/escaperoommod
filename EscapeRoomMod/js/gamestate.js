// Flags list:
// 

function initializeGameState() {
	window.localStorage.setItem("flag_0", "0");
	window.localStorage.setItem("flag_1", "1");
	// ...
}

function setFlag(flag, value) {
	window.localStorage.setItem(flag, value);
}

function getFlag(flag) {
	return window.localStorage.getItem(flag);
}

