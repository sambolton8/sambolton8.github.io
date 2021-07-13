var healthvar = 4;
var goldvar=0;
				
function healthStat()
{
	return healthvar;
}
document.getElementById("health").innerHTML ="Health: " + healthStat();