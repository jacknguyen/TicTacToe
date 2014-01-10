//loads on site load
window.onload = function () {
	var a = document.getElementsByClassName('box');
	var playerTurn = 1;

	//this does the clicks
	for (var i=0; i<a.length; i++){
		a[i].onclick = function() {
			if (this.classList.contains('p1Click' || 'p2Click')) {
				//do nothing
			}else{
				if (playerTurn==1) {
					//player 1 click
					this.className = this.className.replace('boxInit');
					this.className = this.className += " p1Click";
					playerTurn++;
				}else{
					//player 2 click
					this.className = this.className.replace('boxInit');
					this.className = this.className += " p2Click";
					playerTurn--;
				}
			}
		}
	}

};