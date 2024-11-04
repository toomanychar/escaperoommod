// Try setting and removing a key from localStorage. If localStorage is available, that will succeed, and the function will return true. If there is some error, which means localStorage is not available, then the function will return false.
function isLocalStorageAvailable(){
	console.log("Trying to check if localStorage is available...");
    var test = 'isLocalStorageAvailable';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        console.log("localStorage is available.");
        return true;
    } catch(e) {
		console.log("localStorage is unavailable.");
        return false;
    }
}

function notifyIfLocalStorageUnavailable(){
	if (!(isLocalStorageAvailable())) {
		document.getElementById("localStorageNotifier").style.display = "inline";
		console.log("Making localStorageNotifier visible.");
	}
}

notifyIfLocalStorageUnavailable();
