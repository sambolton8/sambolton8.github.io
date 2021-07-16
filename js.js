var healthvar = 3;
//var goldvar = 0;		
let hp = sessionStorage.getItem('storedHealth');
console.log(hp);


function healthStat() {
			
	if (healthvar <= 4) {
		document.getElementById("health").style.color = "red";
			}
			else {
				document.getElementById("health").style.color = "green";
				}
			
				if (healthvar > 10)
				healthvar = 10;
					
					if (healthvar <= 0){
						alert("You are dead... Game over!")
					}


				sessionStorage.setItem('storedHealth', healthvar);
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