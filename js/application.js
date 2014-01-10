//on click remove boxInit and add player click image
var a = document.getElementsByClassName('box');

function changeClass() {
	console.log('clicked');
	document.getElementsByClassName('gameboard').className = document.getElementById('aa').className.replace('boxInit');
	document.getElementsByClassName('gameboard').className+=" p1Click";

	for (var i in a ) {

	}
}



//loads on site load
window.onload = function () {
	// document.getElementsByClassName('box').adEventListener('click',console.log('click'));
	document.getElementsByClassName('box').on('click', changeClass);
};