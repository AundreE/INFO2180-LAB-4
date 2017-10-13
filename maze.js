window.onload = function(){
	document.getElementById("boundary1").addEventListener("mouseover",myFunction);
};
function myFunction(){
	document.getElementById("boundary1").classList.add("youlose");
}