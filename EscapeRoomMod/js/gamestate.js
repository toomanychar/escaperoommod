// Flags list:
// 0: Whether you have taken the cassette in the new black room. nil/0 = you didnt, 1 = you did.
// 1: Whether you have opened the first aid kit in the new black room. nil/0 = you didnt, 1 = you did.

function setFlag(flag, value) {
	window.localStorage.setItem("flag_" + flag, value);
}

function getFlag(flag) {
	return window.localStorage.getItem("flag_" + flag);
}

