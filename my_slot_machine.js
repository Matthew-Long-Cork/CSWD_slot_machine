var bgPos1 =0,bgPos2 =0,bgPos3 =0;
var currentFruit1 = 1,currentFruit2 = 1,currentFruit3 = 1;
var target1,target2,target3;
var disabled = false;

function spin(){

	//the handle is disable when a spin is in progress and enabled after the results are processed.
	if(disabled == false){
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
		
		document.getElementById("slot1").style.backgroundPositionY = bgPos1 +"px";
		document.getElementById("slot2").style.backgroundPositionY = bgPos2 +"px";
		document.getElementById("slot3").style.backgroundPositionY = bgPos3 +"px";
		
		currentFruit1 = target1;
		currentFruit2 = target2;
		currentFruit3 = target3;

		setTimeout(result(), 1000);
	}
}
function result(){
	
	if(currentFruit1 == currentFruit2||currentFruit1==currentFruit3||currentFruit2==currentFruit3){
	document.getElementById("winner").style.backgroundImage = "url('confetti.gif')";
	setTimeout(change1, 500);
	}
	else{
		disabled = false;
	}
}
function change1(){
	document.getElementById("winner").style.height= "25vh";
	setTimeout(change2, 500);
}
function change2(){
	document.getElementById("winner").style.height= "50vh";
	setTimeout(change3, 500);
}
function change3(){
	document.getElementById("winner").style.height= "75vh";
	setTimeout(change4, 500);
}
function change4(){
	document.getElementById("winner").style.height= "100vh";
	setTimeout(reset, 1000);
}
function reset(){
	disabled = false;
	document.getElementById("winner").style.backgroundImage = "none";
	document.getElementById("winner").style.height= "0vh";
}
function open_popup(){
	document.getElementById("pop_up").style.display ="block";
}
function close_popup(){
	document.getElementById("pop_up").style.display ="none";
}
function change_theme_colour(){
	
	if (document.getElementById("theme_colour1").checked) {
		document.body.style.backgroundColor="white";
		document.getElementById("outter_frame").style.backgroundColor ="white";
		document.getElementById("outter_frame").style.border= "1px solid black";
	}
	else{
		document.body.style.backgroundColor="orange";
		document.getElementById("outter_frame").style.backgroundColor ="#bf4040";
		document.getElementById("outter_frame").style.border= "1px solid #bf4040";
	}
}