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
	
	var frage1 = "Was versteht man unter dem Begriff “Machine Learning” (maschinelles Lernen)? \n a) Ein Bereich der KI, bei dem Maschinen menschliches Verhalten nachahmen, ohne aus Daten zu lernen. \n b) Ein Bereich der KI, bei dem Maschinen aus Daten lernen und ihre Leistung im Laufe der Zeit verbessern. \n c) Ein Bereich der KI, der sich ausschließlich auf die Hardware-Entwicklung konzentriert."; 
    var antwort1 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage1, antwort1)) { return };
    
    var frage2 = "Welche der folgenden Programmiersprachen wird häufig im Bereich der KI verwendet? \n a) Python \n b) HTML \n c) Java"; 
    var antwort2 = "a";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage2, antwort2)) { return };
    
    var frage3 = "Was ist ein neuronales Netzwerk? \n a) Ein Netzwerk aus menschlichen Neuronen, das zur Datenverarbeitung genutzt wird. \n b) Ein Rechenmodell, das von der Struktur des menschlichen Gehirns inspiriert ist und Muster in Daten erkennt. \n c) Ein Netzwerk von Computern, das zum Versenden von E-Mails verwendet wird."; 
    var antwort3 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage3, antwort3)) { return };
    
    var frage4 = "Was versteht man unter “überwachtem Lernen” in der KI? \n a) Ein Lernprozess, bei dem der Algorithmus ohne jegliche Daten trainiert wird. \n b) Ein Lernprozess, bei dem der Algorithmus mit gelabelten Daten trainiert wird, um Vorhersagen zu treffen. \n c) Ein Lernprozess, bei dem der Algorithmus nur durch Belohnung und Bestrafung lernt."; 
    var antwort4 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage4, antwort4)) { return };
    
    var frage5 = "Welche der folgenden Methoden gehört zum Bereich des “Reinforcement Learning” (bestärkendes Lernen)? \n a) Entscheidungsbaum \n b) Q-Learning \n c) Support Vector Machines"; 
    var antwort5 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage5, antwort5)) { return };
    
    var frage6 = "Was ist “Big Data” im Kontext von KI? \n a) Kleine Datensätze, die einfach zu analysieren sind. \n b) Große und komplexe Datensätze, die schwierig zu verarbeiten sind, aber wertvolle Erkenntnisse liefern können. \n c) Ein spezieller Algorithmus für die Datenkompression."; 
    var antwort6 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage6, antwort6)) { return };
    
    var frage7 = "Was ist der Turing-Test? \n a) Ein Test zur Messung der Rechenleistung eines Computers. \n b) Ein Test zur Bestimmung, ob eine Maschine menschenähnliche Intelligenz zeigen kann. \n c) Ein Test zur Bewertung von Programmierkenntnissen."; 
    var antwort7 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage7, antwort7)) { return };
    
    var frage8 = "Was versteht man unter “Deep Learning”? \n a) Eine Methode des maschinellen Lernens, die auf flachen linearen Modellen basiert. \n b) Ein Teilgebiet des maschinellen Lernens, das künstliche neuronale Netze mit vielen Schichten verwendet. \n c) Ein Ansatz, bei dem Computer durch Versuch und Irrtum lernen."; 
    var antwort8 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage8, antwort8)) { return };
    
    var frage9 = "Welche der folgenden ist eine häufig verwendete Aktivierungsfunktion in neuronalen Netzen? \n a) ReLU (Rectified Linear Unit) \n b) Fourier-Transformation \n c) Binäre Suche"; 
    var antwort9 = "a";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage9, antwort9)) { return };
    
    var frage10 = "Was ist eine “Trainingsdatenmenge” im maschinellen Lernen? \n a) Ein Netzwerk aus menschlichen Neuronen, das zur Datenverarbeitung genutzt wird. \n b) Ein Rechenmodell, das von der Struktur des menschlichen Gehirns inspiriert ist und Muster in Daten erkennt. \n c) Ein Netzwerk von Computern, das zum Versenden von E-Mails verwendet wird."; 
    var antwort10 = "b";
    if (askQuestion(vorherigerRaum, zeitVerlustMinuten, frage10, antwort10)) { return };

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
