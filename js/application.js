//loads on site load
window.onload = function () {
	var box = document.getElementsByClassName('box');
	var playerTurn = 1;
	var move = 0;
	var resetButton = document.getElementById('reset');


	//this does the clicks
	for (var i=0; i<box.length; i++){
		box[i].onclick = function() {
			if (this.classList.contains('p1Click' || 'p2Click')) {
				//do nothing
			}else{
				if (playerTurn==1) {
					//player 1 click
					this.className = this.className.replace('boxInit');
					this.className = this.className += " p1Click";
					playerTurn++;
					move++;
						if (resetButton.innerHTML == "Start") {
							resetButton.innerHTML = "Reset";
						}
				}else{
					//player 2 click
					this.className = this.className.replace('boxInit');
					this.className = this.className += " p2Click";
					playerTurn--;
					move++;
				}
			}
		}
		console.log(move); //move print test
	}

	//reset game
	document.getElementById('reset').onclick = function() {
		resetButton.innerHTML = "Start"; // sets reset button to start
		//resets class names
		for (var i=0; i<box.length; i++){

			box[i].className = box[i].className.replace('p1Click');
			box[i].className = box[i].className.replace('p2Click');
			box[i].className = box[i].className += " boxInit";
			move = 0;
			playerTurn = 1;

		}
	}

};