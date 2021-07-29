var healthvar = 3;
//var goldvar = 0;	

var hp = parseInt(localStorage.getItem('storedHealth'), 10);
var sword = parseInt(sessionStorage.getItem('haveSword'), 10);
console.log(hp);
console.log(sword);



function healthStat() {

	localStorage.getItem('storedHealth');

	//alert(typeof hp)
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
		localStorage.setItem('storedHealth', hp += 3);
//		goldvar += 2;
		
		
		document.getElementById("health").innerHTML = "Health: " + healthStat() + "/10";
//		document.getElementById("gold").innerHTML = "Gold: " + goldStat();	

}	

function gameOver() {
	if (hp <= 0) {
		confirm("You are dead... \nGame Over!");
		window.location.href = "index.html";	
		localStorage.clear();
		localStorage.setItem('storedHealth', healthvar);
	}		
}

function fallDeath() {
	hp -= 1000;
	onload = gameOver();
}

function resetHealth() {
		localStorage.clear();
		localStorage.setItem('storedHealth', healthvar);
}

function jumpHealthLoss() {
	localStorage.setItem('storedHealth', hp -= 1);
}

function fullHealth() {
	localStorage.setItem('storedHealth', hp += 10);
	sword = true;
}

function spareFish() {
	localStorage.setItem('storedHealth', hp += 2);
}


function hasSword() {
	sessionStorage.setItem('haveSword', 0);
	var items = document.getElementById("itemsDiv");
	if (sword === false){
		items.style.display = "none";
	}
}

function dive() {
	var diveRandom = Math.floor(Math.random() * 10) + 1;
	if (diveRandom > 8) {
	localStorage.setItem('storedHealth', hp -= 5);
	window.location.href = "11diveF.html";	
	

	}	else{
		window.location.href = "11diveW.html";
	}
}

function throwBone() {
	var throwRandom = Math.floor(Math.random() * 10) + 1;
	if (throwRandom > 2) {
	localStorage.setItem('storedHealth', hp -= 1);
	window.location.href = "11throwBoneF.html";	
	

	}	else{
		window.location.href = "11throwBoneW.html";
	}
}

function slash() {
	var slashRandom = Math.floor(Math.random() * 10) + 1;
	if (slashRandom > 2) {
	window.location.href = "12slashF.html";	
	localStorage.setItem('storedHealth', hp -= 4);


	}	else{
		window.location.href = "12slashW.html";
	}
}

function sneakAttack() {
	var sneakRandom = Math.floor(Math.random() * 10) + 1;
	if (sneakRandom > 1) {
	localStorage.setItem('storedHealth', hp -= 100);
		window.location.href = "10sneakAttack.html"
	}	else {
		window.location.href = "10sneakAttack.html"
	}
}

function run() {
	var runRandom = Math.floor(Math.random() * 10) + 1;
	if (runRandom > 3) {
	localStorage.setItem('storedHealth', hp -= 100);
			window.location.href = "13runF.html";
	}	else {
		window.location.href = "13runW.html";
	}
}

function run2() {
	var run2Random = Math.floor(Math.random() * 10) + 1;
	if (run2Random > 7) {
	localStorage.setItem('storedHealth', hp -= 100);
			window.location.href = "13runF.html";
	}	else {
		window.location.href = "13runW.html";
	}
}

function stab() {
	var stabRandom = Math.floor(Math.random() * 10) + 1;
	if (stabRandom > 3) {
	localStorage.setItem('storedHealth', hp -= 10);	
			window.location.href = "12stabF.html";
	}	else {
		window.location.href = "12stabW.html";
	}
}
