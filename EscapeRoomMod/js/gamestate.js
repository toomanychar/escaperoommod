// Flags list:
// 0: Whether you have taken the cassette in the new black room. nil/0 = you didnt, 1 = you did.
// 1: Whether you have opened the first aid kit in the new black room. nil/0 = you didnt, 1 = you did.
// 2: Whether the inventory is currently open. nil/0 = it's not, 1 = it is.
function setFlag(flag, value) {
	window.localStorage.setItem("flag_" + flag, value);
}

function getFlag(flag) {
	return window.localStorage.getItem("flag_" + flag);
}

