var healthvar = 3;
//var goldvar = 0;		
var hp = localStorage.getItem('storedHealth');
console.log(hp);


function healthStat() {
	
sessionStorage.setItem('storedHealth', healthvar);

	if (healthvar <= 4) {
		document.getElementById("health").style.color = "red";
			}
			else {
				document.getElementById("health").style.color = "green";
				}
			
				if (healthvar > 10){
				healthvar = 10;
				}
					if (healthvar <= 0){
						healthvar = 0;
					}

					//return healthvar;	

				return hp;
			
			}
				
// function goldStat() {
//	return goldvar;
//			}



function searchWreckage() {
	alert('You found an apple. [+3 health]');
		healthvar += 3;
//		goldvar += 2;
		
		document.getElementById("health").innerHTML = "Health: " + healthStat() + "/10";
//		document.getElementById("gold").innerHTML = "Gold: " + goldStat();	

}	

function gameOver() {
	if (hp <= 0) {
		confirm("You are dead... \nGame Over!");
		window.location.href = "https://sambolton8.github.io";	
	}		
}

function fallDeath() {
	hp -= 100;
	onload = gameOver();
}