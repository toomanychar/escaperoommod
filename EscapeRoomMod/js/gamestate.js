// Flags list:
// 0: Whether you have taken the cassette in the new black room. nil/0 = you didnt, 1 = you did.
// 1: Whether you have opened the first aid kit in the new black room. nil/0 = you didnt, 1 = you did.
// 2: Whether the inventory is currently open. nil/0 = it's not, 1 = it is.
// 3: Whether the door to the laboratory is currently open. nil/0 = it's not, 1 = it is.
// 11_l: Whether the left riddle of room 11 is solved. nil/0 = it's not, 1 = it is.
// 11_r: Whether the right riddle of room 11 is solved. nil/0 = it's not, 1 = it is.
// 11_crate: Whether the scroll has been taken from the crate. nil/0 = it hasn't been, 1 = it has been. 
// 15_direction: The direction you are facing in the 15th room, so in the maze. 1 = up, 2 = right, 3 = down, 4 = left. nil is undefined
// 15_room: The room you are in inside the dungeon (number). nil = 0.
// lantern: Whether you are holding the lantern or not. nil/0 = you are not, 1 = you are.
// 13_door: The door in the puzzle with the knights that leads to the treasure (between 1 and 3). nil is undefined.







function setFlag(flag, value) {
	window.localStorage.setItem("flag_" + flag, value);
}

function getFlag(flag) {
	return window.localStorage.getItem("flag_" + flag);
}

