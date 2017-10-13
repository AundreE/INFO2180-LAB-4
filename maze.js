var loser = false;  // whether the user has hit a wall

window.onload = function() {    
   document.getElementById("end").onmouseover = overEnd;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}


function overEnd() {
    if(loser) {
        alert("Nice try but u were not successful :( ");
    } else {
        alert("You win!");
    }
}