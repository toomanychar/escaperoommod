// Flags list:
// 0: Whether you have taken the cassette in the new black room. nil/0 = you didnt, 1 = you did.
// 1: Whether you have opened the first aid kit in the new black room. nil/0 = you didnt, 1 = you did.
// 2: Whether the inventory is currently open. nil/0 = it's not, 1 = it is.
// 3: Whether the door to the laboratory is currently open. nil/0 = it's not, 1 = it is.
// 11_l: Whether the left riddle of room 11 is solved. nil/0 = it's not, 1 = it is.
// 11_r: Whether the right riddle of room 11 is solved. nil/0 = it's not, 1 = it is.
// 11_crate: Whether the scroll has been taken from the crate. nil/0 = it hasn't been, 1 = it has been. 



function setFlag(flag, value) {
	window.localStorage.setItem("flag_" + flag, value);
}

function getFlag(flag) {
	return window.localStorage.getItem("flag_" + flag);
}

