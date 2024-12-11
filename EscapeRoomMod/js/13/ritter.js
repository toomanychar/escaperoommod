function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

if (!getFlag("13_door")) {
	setFlag("13_door", randInt(1, 3))
}

const leben = 3 // Knight of Life
const tod = 2 // Knight of Death
const verlies = 1 // Knight of the Dungeon
var ritter = ["", "", ""]
ritter[leben] = "Ritter des Lebens"
ritter[tod] = "Ritter des Todes"
ritter[verlies] = "Ritter des Verlieses"



function askQuestion(knight, questionNumber, optionNumber) {
	var lying = null
	
	switch (knight) {
		case leben:
			lying = false
			break
		case tod:
			lying = true
			break
		case verlies:
			lying = (randInt(0, 1) == 2)
			break
	}
	
	switch (questionNumber) {
		case 1: // Welche Tür führt zum Schatz?
			var door = Number(getFlag("13_door"))
			if (!lying) {
				return door
			} else {
				var fakeDoor = randInt(1, 3)
				while (fakeDoor == door) {
					fakedoor = randInt(1, 3)
				}
				return fakeDoor
			}
			break
		case 2: // Was ist die Identität des...
			if (!lying) {
				return ritter[optionNumber]
			} else {
				var fakeRitter = optionNumber
				while (fakeRitter == optionNumber) {
					fakeRitter = randInt(1, 3)
				}
				return ritter[fakeRitter]
			}
			break
		case 3: // Welcher Ritter ist der Ritter des...
			if (!lying) {
				return 	
			}
			break
	}
}
