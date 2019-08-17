/* HTML ELEMENTS */
var winner;

/* VARIABLES */
var bgPos1 =0,bgPos2 =0,bgPos3 =0;
var currentFruit1 = 1,currentFruit2 = 1,currentFruit3 = 1;
var target1,target2,target3;
var disabled = false;

//===========================================================================================================
//				Get the HTML elements on load
//===========================================================================================================
window.onload = function() {
	winner = document.getElementById("winner");
	pop_up = document.getElementById("pop_up");
	slot1 = document.getElementById("slot1");
	slot2 = document.getElementById("slot2");
	slot3 = document.getElementById("slot3");
	theme_colour1 = document.getElementById("theme_colour1");
	outter_frame = document.getElementById("outter_frame");
}
/* spin the slots when user clicks */
function spin(){

	// the handle is disable when a spin is in progress and enabled after the results are processed.
	if(!disabled){
		disabled = true;
		target1 = Math.floor(Math.random()*5+1); 
		target2 = Math.floor(Math.random()*5+1); 
		target3 = Math.floor(Math.random()*5+1); 
		
		var movement1 = 1000+200*(target1-currentFruit1);
		bgPos1 = bgPos1 - movement1;
		
		var movement2 = 1000+200*(target2-currentFruit2);
		bgPos2 = bgPos2 - movement2;
		
		var movement3 = 1000+200*(target3-currentFruit3);
		bgPos3 = bgPos3 - movement3;
		
		slot1.style.backgroundPositionY = bgPos1 +"px";
		slot2.style.backgroundPositionY = bgPos2 +"px";
		slot3.style.backgroundPositionY = bgPos3 +"px";
		
		currentFruit1 = target1;
		currentFruit2 = target2;
		currentFruit2 = target2;
		currentFruit3 = target3;

		setTimeout(result(), 1000);
	}
}
/* check result */
function result(){
	
	if(currentFruit1 == currentFruit2||currentFruit1==currentFruit3||currentFruit2==currentFruit3){
	winner.style.backgroundImage = "url('confetti.gif')";
	
	myLoop(0)// pass in a value of 'zero'
	}
	else{
		disabled = false;
	}
}
/* delayed loop to allow for the confetti to drop down the screen*/
function myLoop(percentage){
	
	setTimeout(function () {
		percentage = percentage+10;      		
		show_confetti(percentage) 
		
		  if (percentage < 100) {            
			 myLoop(percentage);            
		  }
		  else	 
			setTimeout(reset, 1000);
	   }, 100)
	
}
function show_confetti(percentage){
	winner.style.height = percentage + "vh";
	console.log("print: " + percentage)
}
function reset(){
	disabled = false;
	winner.style.backgroundImage = "none";
	winner.style.height= "0vh";
}
/* open/close the options */
function open_popup(){
	pop_up.style.display ="block";
}
function close_popup(){
	pop_up.style.display ="none";
}
/* just a simple if/else */
function change_theme_colour(){
	
	if (theme_colour1.checked) {
		document.body.style.backgroundColor="white";
		outter_frame.style.backgroundColor ="white";
		outter_frame.style.border= "1px solid black";
	}
	else{
		document.body.style.backgroundColor="orange";
		outter_frame.style.backgroundColor ="#bf4040";
		outter_frame.style.border= "1px solid #bf4040";
	}
}