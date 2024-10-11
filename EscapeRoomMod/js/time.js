/* 	
	Jan-Michael Müller
	21.05.2022
	Der Code wurde vom Autor SH4 @b3nsh4 kopiert und an den eigenen Anforderungen angepasst,
	siehe dazu folgende Quelle: https://github.com/b3nsh4/js-countdown-timer-localstoarge/blob/main/timer.html

	Einbinden des Scripts: 
	<!-- Timer Script einbinden -->
	<script src="js/time.js"></script>

	Einbinden des Scripts:
	<!-- Timer Script einbinden -->
	<div id="total-time-left" align="right"> </div>
*/	


if(localStorage.getItem("count_timer")){
    var count_timer = localStorage.getItem("count_timer");
} else {
    var count_timer = 60*60;
}
var minutes = parseInt(count_timer/60);
var seconds = parseInt(count_timer%60);
function countDownTimer(){
    if(seconds < 10){
        seconds= "0"+ seconds ;
    }if(minutes < 10){
        minutes= "0"+ minutes ;
    }
    
    document.getElementById("total-time-left").innerHTML = "Übrige Zeit: "+minutes+" Minutes "+seconds+" Seconds";
    if(count_timer <= 0){
         localStorage.clear("count_timer");
		 document.location.href="7.1_EndeGescheitert.html";
    } else {
        count_timer = count_timer -1 ;
        minutes = parseInt(count_timer/60);
        seconds = parseInt(count_timer%60);
        localStorage.setItem("count_timer",count_timer);
        setTimeout("countDownTimer()",1000);
    }
}
setTimeout("countDownTimer()",100);
