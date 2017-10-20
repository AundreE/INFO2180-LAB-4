var loser = false;  // whether the user has hit a wall

window.onload = function() {
    document.getElementById("start").onclick = startingClick;
    document.getElementById("end").onmouseover = overEnd;
    document.getElementById("maze").onmouseleave=overBoundary;
    var boundaries = document.querySelectorAll("div#maze div.boundary ");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};
function startingClick(){
	loser = false;
    document.getElementById("status").innerHTML ="Move your mouse over the S to begin";
	var boundaries = document.querySelectorAll("div#maze div.boundary ");
	for (var x = 0; x < boundaries.length; x++){
		boundaries[x].classList.remove("youlose"); 
	}
}

function overBoundary() {
    loser = true;
    document.getElementById("status").innerHTML ="You lose!";
    var boundaries = document.querySelectorAll("div#maze div.boundary ");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}
function overEnd() {
    if(!loser) {
        document.getElementById("status").innerHTML ="You win!";
    }
}