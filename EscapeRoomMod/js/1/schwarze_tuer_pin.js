function pin_eingeben() {
var pin = "13377";
var eingabe = window.prompt("Bitte PIN eingeben","");
if(eingabe != pin) {
alert("Falscher PIN!");
} else {
document.location.href="6.1_Raum-Schwarz.html";
}
}
