// 24=4*6 slots inside inventory - 4 Zeilen, 6 Spalten
// every instance of a unique object can be stacked infinitely many times in one slot
// if there are no free slots left, you can't take any more objects
// TODO: can you drop items?

// Item IDs:
// 0 - Empty
// 1 - Kaffeebohne

// Create a completely empty inventory
function initializeInventory() {
	if (window.localStorage.getItem("invSlot_0")) {
		throw new Error("The inventory is already initialized, the function initializeInventory shouldn't be called")
	}
	for (let i = 0; i < 24; i++) {
		window.localStorage.setItem("invSlot_" + i, "0 0");
	}
}

// check if inventory is full. if it is, return true, otherwise return false
function isInventoryFull() {
	let lastSlot = window.localStorage.getItem("invSlot_" + (24-1));
	
	if (lastSlot == "0 0") { // if the last slot is empty, then the inventory is not full, return false
		return false;
	} else {
		return true; // if the last slot isn't empty, then the inventory must be full, return true
	}
}

// check if there is at least [anzahl] amount of object with id [id] in the inventory
function isInInventory(id, anzahl) {
	var slot;
	var slot_id;
	var slot_anzahl;
	for (let i = 0; i < 24; i++) {
		slot = window.localStorage.getItem("invSlot_" + i).split(' ');
		slot_id = slot[0];
		slot_anzahl = slot[1];
		if ((slot_id == id) && (slot_anzahl >= anzahl)) {
			return true;
		}
	}
	
	return false;
}

// get first (and, if the whole library works correctly, the only) index of object [id] in inventory
// [!!!] By using this function with id 0, you can find the index of the first empty slot in the inventory
function indexOfObjectInInventory(id) {
	var slot;
	var slot_id;
	for (let i = 0; i < 24; i++) {
		slot = window.localStorage.getItem("invSlot_" + i).split(' ');
		slot_id = slot[0];
		if (slot_id == id) {
			return i;
		}
	}
	
	// The object isn't in the inventory. This is catastrophic for most programs, so this function throws an error. 
	throw new Error("Object " + id + " is not in the inventory. Use isInInventory(id, 1) to check if it is in it beforehand.");
}

// add [anzahl] amount of object [id] to inventory if possible (if inventory is full and object [id] isn't there yet, you can't add it to inventory)
function addToInventory(id, anzahl) {
	var index; // the index, where the object [id] will be added
	// if the object is already in the inventory in some amount, add [anzahl] to that amount and return true
	if (isInInventory(id, 1)) {
		// add to the existing slot of the object
		// find index of object [id] in the inventory
		index = indexOfObjectInInventory(id);
		slot = window.localStorage.getItem("invSlot_" + index).split(' ');
		slot_anzahl = slot[1];
		new_anzahl = Number(slot_anzahl) + Number(anzahl);
		window.localStorage.setItem("invSlot_" + index, id + " " + new_anzahl);
		return true;
	}
	
	// if the inventory doesn't contain object [id] and its full, throw an error and return false.
	if (isInventoryFull()) {
		throw new Error("Object " + id + " can't be added to inventory, because it isn't in the inventory and the inventory is full. Use isInventoryFull() to avoid this error.");
		return false;
	}

	// Since the inventory doesn't contain object [id] and it isn't full, add it to the first empty slot and return true
	index = indexOfObjectInInventory(0);
	window.localStorage.setItem("invSlot_" + index, id + " " + anzahl);
	return true;
}

function removeFromInventory(id, anzahl) {
	if (!isInInventory(id, anzahl)) { // if the object isn't in the inventory in the necessary amount, throw an error
		throw new Error("Object " + id + " can't be removed from inventory, because it isn't there in sufficient amounts. Use isInInventory(id, anzahl) to check whether the object is in inventory beforehand.");
		return false;
	}
	
	// the object is in the inventory in the necessary amount
	
	var index = indexOfObjectInInventory(id);
	
	var slot = window.localStorage.getItem("invSlot_" + index).split(' ');
	var slot_anzahl = slot[1];
	
	var new_anzahl = Number(slot_anzahl) - Number(anzahl);
	
	if (new_anzahl > 0) { // if removing anzahl instances of object from inventory doesn't remove all of it, just write the new amount of this object into the same slot
		window.localStorage.setItem("invSlot_" + index, id + " " + new_anzahl);
		return true;
	}
	
	// there should be nothing in the slot index in the inventory
	
	window.localStorage.setItem("invSlot_" + index, "0 0");

	// shift the entire inventory starting from index [index+1] one to the left, and set the last value to "0 0", so that the empty slot travels to the first empty spot
	// reasoning behind this: TODO
	for (let i = Number(index)+1; i < 24; i++) {
		window.localStorage.setItem("invSlot_" + (i-1), window.localStorage.getItem("invSlot_" + i));
	}
	window.localStorage.setItem("invSlot_" + (24-1), "0 0")
	
	return true;
}

