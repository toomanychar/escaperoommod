function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

if (!getFlag("13_door")) {
	setFlag("13_door", randInt(1, 3))
}



function askQuestion(knight, questionNumber, optionNumber) {
	
}
