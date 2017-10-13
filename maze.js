var loser = false;  // whether the user has hit a wall

window.onload = function() {    
    document.getElementById("start").onclick = startingClick;
    document.getElementById("end").onmouseover = overEnd;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};
function startingClick(){
	loser = false;
	var boundaries = document.querySelectorAll("div#maze div.boundary");
	for (var x = 0; x < boundaries.length; x++){
		boundaries[x].classList.remove("youlose"); 
	}
}


function overBoundary() {
    loser = true;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}


function overEnd() {
    if(loser) {
        document.getElementById("status").innerHTML ="Nice try but u were not successful :(";
    } else {
        document.getElementById("status").innerHTML ="You win!";
    }
}