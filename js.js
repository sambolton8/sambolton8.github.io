var healthvar = 3;	

// Allows for the health values to be stored across multiple pages.
var hp = parseInt(localStorage.getItem('storedHealth'), 10);
var sword = parseInt(sessionStorage.getItem('haveSword'), 10);

console.log(hp);
alert(typeof(hp));

// Changes the health text colour based on how much health is available.
// Stops the health counter from exceeding 10 or going below 0.
function healthStat() {

	// Obtains the current health value.
	localStorage.getItem('storedHealth');

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
				


// Displays an alert telling the player what they have found while also increasing their health.
function searchWreckage() {
	alert('You found an apple. [+3 health]');
	localStorage.setItem('storedHealth', hp += 3);
		
		// Displays the health counter
		document.getElementById("health").innerHTML = "Health: " + healthStat() + "/10";
}	


// Causes the game to end when the player's health reaches 0. 
// Displays an alert telling the player they have died and allowing them to return to the home screen.
function gameOver() {
	if (hp <= 0) {
		confirm("You are dead... \nGame Over!");
		window.location.href = "https://sambolton8.github.io/index.html";

		// Resets the health value for the next game.
		localStorage.clear();
		localStorage.setItem('storedHealth', healthvar);
	}		
}

// Causes the player to die when a certain path is chosen.
function fallDeath() {
	hp -= 1000;
	onload = gameOver();
}

// Causes the player to lose health when a certain path is chosen.
function jumpHealthLoss() {
	localStorage.setItem('storedHealth', hp -= 1);
}

// Causes the player to regain health and aquire the sword.
function fullHealth() {
	localStorage.setItem('storedHealth', hp += 10);
	sword = true;
}

// Causes the player to regain some health when a certain path is chosen.
function spareFish() {
	localStorage.setItem('storedHealth', hp += 2);
}

// Enables the user to see that they have the sword in their items.
function hasSword() {
	
	// Sets the items div to be visible.
	sessionStorage.setItem('haveSword', 0);
	var items = document.getElementById("itemsDiv");
	if (sword === false){
		items.style.display = "none";
	}
}

// Rolls for a random number between 1 and 10 to have a 80% chance of completing an action.
function dive() {
	var diveRandom = Math.floor(Math.random() * 10) + 1;
	if (diveRandom > 8) {
		
		// If the player loses the roll they will lose 5 health and be directed to the failed action page.
		localStorage.setItem('storedHealth', hp -= 5);
		window.location.href = "https://sambolton8.github.io/11diveF.html";	
	
	// If the player wins the roll they will be directed to the completed action page.
	}	else{
		window.location.href = "https://sambolton8.github.io/11diveW.html";
	}
}

// Rolls for a random number between 1 and 10 to have a 20% chance of completing an action.
function throwBone() {
	var throwRandom = Math.floor(Math.random() * 10) + 1;
	if (throwRandom > 2) {
		
		// If the player loses the roll they will lose 3 health and be directed to the failed action page.
		localStorage.setItem('storedHealth', hp -= 3);
		window.location.href = "https://sambolton8.github.io/11throwBoneF.html";	
	
	// If the player wins the roll they will be directed to the completed action page.
	}	else{
		window.location.href = "https://sambolton8.github.io/11throwBoneW.html";
	}
}

// Rolls for a random number between 1 and 10 to have a 20% chance of completing an action.
function slash() {
	var slashRandom = Math.floor(Math.random() * 10) + 1;
	if (slashRandom > 2) {
		
		// If the player loses the roll they will lose 4 health and be directed to the failed action page.
		window.location.href = "https://sambolton8.github.io/12slashF.html";	
		localStorage.setItem('storedHealth', hp -= 4);

	// If the player wins the roll they will be directed to the completed action page.
	}	else{
		window.location.href = "https://sambolton8.github.io/12slashW.html";
	}
}

// Rolls for a random number between 1 and 10 to have a 10% chance of completing an action.
function sneakAttack() {
	var sneakRandom = Math.floor(Math.random() * 10) + 1;
	if (sneakRandom > 1) {
		
		// If the player loses the roll they will die.
		localStorage.setItem('storedHealth', hp -= 100);
		window.location.href = "https://sambolton8.github.io/10sneakAttackF.html"
		
		// If the player wins the roll they will be directed to the completed action page.
	}	else {
		window.location.href = "https://sambolton8.github.io/10sneakAttack.html"
	}
}

// Rolls for a random number between 1 and 10 to have a 30% chance of completing an action.
function run() {
	var runRandom = Math.floor(Math.random() * 10) + 1;
	if (runRandom > 3) {
	
		// If the player loses the roll they will die.
		localStorage.setItem('storedHealth', hp -= 100);
		window.location.href = "https://sambolton8.github.io/13runF.html";
			
		// If the player wins the roll they will be directed to the completed action page.
	}	else {
		window.location.href = "https://sambolton8.github.io/13runW.html";
	}
}

// Rolls for a random number between 1 and 10 to have a 70% chance of completing an action.
function run2() {
	var run2Random = Math.floor(Math.random() * 10) + 1;
	if (run2Random > 7) {
		
		// If the player loses the roll they will die.
		localStorage.setItem('storedHealth', hp -= 100);
		window.location.href = "https://sambolton8.github.io/13runF.html";
	
		// If the player wins the roll they will be directed to the completed action page.
	}	else {
		window.location.href = "https://sambolton8.github.io/13runW.html";
	}
}


// Rolls for a random number between 1 and 10 to have a 30% chance of completing an action.
function stab() {
	var stabRandom = Math.floor(Math.random() * 10) + 1;
	if (stabRandom > 3) {
		
		// If the player loses the roll they will die.
		localStorage.setItem('storedHealth', hp -= 100);	
		window.location.href = "https://sambolton8.github.io/12stabF.html";
		
		// If the player wins the roll they will be directed to the completed action page.
	}	else {
		window.location.href = "https://sambolton8.github.io/12stabW.html";
	}
}
