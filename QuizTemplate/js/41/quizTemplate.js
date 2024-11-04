// This is a template JavaScript-File for a quiz. You can use this to make your own simple quiz for our project. 

// This script will start automatically once you load the page with it in it. It will ask you a series of questions. 
// If you answer any question incorrectly, you will be sent to the previous room. If you answer all questions correctly, you will be sent to the next room.
// Change the questions and answers to your liking and try out the script by loading 41.0.RaumHandy.html


// Explanation about the number 41:
// [41].0_RaumHandy.html
//   ^ 41 is the room number. Every room in our project has its own designated number. For this example room, I chose 41 randomly.
// The javascript files for every room are saved inside js/roomnumber. So, for instance, if the number of the room were 17, the javascript files for that room would be saved in js/17
// The room number increases by 1 with each room added. So the room number of the first room is 1, of the second room is 2, etc.
// The other numbers inside the name of the file are there to distinguish which part of the room you are in. In most rooms, there are at least two parts - left and right.
// 41[.0]_Raumhandy.html
// 41[.0.0]_quizTemplate.html
//     ^ These numbers should also increase by 1 with each segment of the room, but it doesn't matter which part of the room has which number.
// Basically, the first number in the rooms name is the room number, all other numbers are used to distinguish between different parts of the same room. 
// The numbers are separated with . and at the end of the numbers comes _ and then the name of the room along with .html

// This will be asked at the start of the quiz. Please CHANGE THIS if necessary.
alert("Um fortzufahren, müssen Sie ein Quiz lösen. Bitte geben Sie den Buchstaben der jeweiligen richtigen Antwort ein. Wenn Sie falsch antworten, verlieren Sie 1 Minute Zeit."); 
quiz(); // Start the quiz

function quiz() {
	var zeitVerlustMinuten = 1;
	var vorherigerRaum = "41.0_RaumHandy.html"; // CHANGE THIS. This is where the user will be sent for answering wrong (usually previous room)
	var naechsterRaum = "42.0_RaumSuccess.html"; // CHANGE THIS. This is where the user will be sent for answering all questions correclty (usually next room)
	
	var frage, antwort, eingabe;
	
	var frage = "Was ist meine Lieblingsfarbe? \n a) Blau \n b) Rot \n c) Grün \n d) Braun"; // CHANGE THIS. First question
	var antwort = "c"; // CHANGE THIS. First answer
	if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage, antwort)) { return };
	
	var frage = "Was ist meine Lieblingszahl? \n a) 1 \n b) 2 \n c) 3 \n d) 42"; // CHANGE THIS. Second question
	var antwort = "b"; // CHANGE THIS. Second answer
	if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage, antwort)) { return };
	
	// Insert more questions using the previous template here.
	
	
	
	
	// Send user to the next room once they answer all questions correctly
	document.location.href=naechsterRaum;
}

function askQuestion(vorherigerRaum, zeitVerlustMinuten, frage, antwort) {
	var eingabe = window.prompt(frage,"");
	if (eingabe != antwort) {
		// Make the user lose time for answering wrong
		var zeit = Number(localStorage.getItem("count_timer")); // Get the time the user has left and convert it from a string to a number
		zeit = zeit - zeitVerlustMinuten*60; // Remove zeitVerlustMinuten minutes from the time the user has left
		localStorage.setItem("count_timer", zeit); // Save the value that you got into the localStorage
		
		// Send the user to the previous room
		alert("Leider falsch, versuche es nochmal!");
		document.location.href = vorherigerRaum;
		return true;
	} else {
		alert("Korrekt!");
		return false;
	}
}
