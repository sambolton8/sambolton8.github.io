var healthvar = 3;
var goldvar=0;
				
function healthStat() {
	if (healthvar <= 4) {
		document.getElementById("health").style.color = "red";
			}
			else {
				document.getElementById("health").style.color = "green";
				}
					return healthvar;		
			}

				
function goldStat() {
	return goldvar;
			}
		

function searchWreckage() {
	alert('You found an apple and 2 gold');
	(healthvar + 3);
	(goldvar + 2);
	return healthvar;
	return goldvar;
}	