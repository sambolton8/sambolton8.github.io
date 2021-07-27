var healthvar = 3;
//var goldvar = 0;	

var hp = parseInt(localStorage.getItem('storedHealth'), 10);

console.log(hp);


function healthStat() {

	localStorage.getItem('storedHealth');

//	alert(typeof hp)
	if (hp <= 4) {
		document.getElementById("health").style.color = "red";
			}
			else {
				document.getElementById("health").style.color = "green";
				}
			
				if (hp > 10){
				hp = 10;
				}
					if (hp <= 0){
						hp = 0;
					}
	

				return hp;
			
			}
				
// function goldStat() {
//	return goldvar;
//			}



function searchWreckage() {
	alert('You found an apple. [+3 health]');
		localStorage.setItem('storedHealth', healthvar += 3);
//		goldvar += 2;
		
		//return hp;
		
		document.getElementById("health").innerHTML = "Health: " + healthStat() + "/10";
//		document.getElementById("gold").innerHTML = "Gold: " + goldStat();	

}	

function gameOver() {
	if (hp <= 0) {
		confirm("You are dead... \nGame Over!");
		window.location.href = "https://sambolton8.github.io";	
		localStorage.clear();
	}		
}

function fallDeath() {
	hp -= 100;
	onload = gameOver();
}