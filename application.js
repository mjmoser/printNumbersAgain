function printNumbers() {
	var numberOne = document.getElementById ("numberOne");
	var numberTwo = document.getElementById ("numberTwo");
	var output = document.getElementById ("output");	
		
	for(var j = 1; j <= numberTwo.value; j++) {
		output.innerHTML += "<div>";	
		for(var i = 1; i <= numberOne.value; i++) {
			output.innerHTML += " " + i;
		}
		output.innerHTML += "</div>";	
	}
}
