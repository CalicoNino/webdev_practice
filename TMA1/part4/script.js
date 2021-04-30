////////Content Window Setup

//loads to Content window from responsetext given
//condition is readyState and web status
function loadContentWindow() {
	if(this.readyState == 4 && this.status == 200) {
		clearContentWindow();//clears previous window
		document.getElementById("contentWindow").innerHTML = this.responseText;
	}
}

//clears content window
function clearContentWindow() {
	var content = document.getElementById("contentWindow")
	while (content.hasChildNodes()) {
    	content.removeChild(content.lastChild);
	}
}

//gets Width Conversions Window
function windowWeight(){
	var req = new XMLHttpRequest();
	req.open("GET", "./conversions/weight.html", true);
	sessionStorage.Tool = "unitConversion";
	sessionStorage.Unit = "Weight";
	req.onreadystatechange = loadContentWindow;
	req.send();
}

//gets Length Conversions Window
function windowLength(){
	var req = new XMLHttpRequest();
	req.open("GET", "./conversions/length.html", true);
	sessionStorage.Tool = "unitConversion";
	sessionStorage.Unit = "Length";
	req.onreadystatechange = loadContentWindow;
	req.send();
}

//gets Area Conversions Window
function windowArea(){
	var req = new XMLHttpRequest();
	req.open("GET", "./conversions/area.html", true);
	sessionStorage.Tool = "unitConversion";
	sessionStorage.Unit = "Area";
	req.onreadystatechange = loadContentWindow;
	req.send();
}

//gets Volume Conversions Window
function windowVolume(){
	var req = new XMLHttpRequest();
	req.open("GET", "./conversions/volume.html", true);
	sessionStorage.Tool = "unitConversion";
	sessionStorage.Unit = "Volume";
	req.onreadystatechange = loadContentWindow;
	req.send();
}

//gets Mortagage Window
function windowMortgage() {
	var req = new XMLHttpRequest();
	req.open("GET", "./mortgage.html", true);
	req.onreadystatechange = loadContentWindow;
	sessionStorage.Tool = "mortgage";
	req.send();
}

//gets Quadratic Solver Window
function windowQuadratic(){
	var req = new XMLHttpRequest();
	req.open("GET", "./quadsolv.html", true);
	console.log("why")
	req.onreadystatechange = loadContentWindow;
	sessionStorage.Tool = "quadsolv";
	req.send();
}

//get selected radio from list of radio selections
function getSelectedRadio(radios){
	var tmp = null; 
	for(var i = 0; i < radios.length; i++) {
	   	if(radios[i].checked){	   		
	       tmp = radios[i].value;
	       break;
	   	}
 	}
 	return tmp;
}

///Conversions

//Weight conversions
var kgTog = 1000;
var	ounceTog = 28.3495;
var lbTog = 453.592;
var tonTog =907185;

//Length Conversions
var mToCm = 100;
var footToCm = 30.48;
var inchToCm = 2.54;
var yardToCm = 91.44;

//Area Conversions
var m2ToCm2 = 10000;
var yard2ToCm2 = 8361.2736;
var acreToCm2 = 40470000;
var foot2ToCm2 = 929.03;

//Volume conversions
var m3ToCm3 = 1000000;
var galToCm3 = 3785.41;
var litreToCm3 =1000;

//Conversions based on inputs and radio button choices
function conversion(){
	var val = document.getElementById("input").value;
	var unitFrom = getSelectedRadio(document.getElementsByName("From"))
	var unitTo = getSelectedRadio(document.getElementsByName("To"))
	
	if(!parseFloat(val)){
		document.getElementById("output").innerHTML = "Invalid input";
	}else if (unitFrom == null){
		document.getElementById("output").innerHTML = "No 'From' unit selected";
	}else if(unitTo == null){
		document.getElementById("output").innerHTML = "No 'To' unit selected";
	}else if(unitTo == unitFrom){
		document.getElementById("output").innerHTML = "Same Units";
	}else {
		switch(sessionStorage.Unit){
			case "Weight":
				val = Tog(val, unitFrom)
				val = gToUnit(val, unitTo);
				break;
			case "Length":
				val = ToCm(val, unitFrom);
				val = CmToUnit(val,  unitTo);
			break;
			case "Area":
				val = ToCm2(val, unitFrom);
				val = Cm2ToUnit(val,  unitTo);
			break;
			case "Volume":
				val = ToCm3(val, unitFrom);
				val = Cm3ToUnit(val,  unitTo);
			break;
		}
		val = roundToAtMost(val, 8);
		document.getElementById("output").innerHTML = val;
	}
}

//conversion g to input unit
function gToUnit(val, unit){
	switch(unit){
		case "g":
			return val;
		case "Kg":
			return val / kgTog;
		case "Ounce":
			return val / ounceTog;
		case "Pound":
			return val / lbTog;
		case "Ton":
			return val / tonTog;
		default:
			return val;
	}	
}

//conversion to grams
function Tog(val, unit){
	switch(unit){
		case "g":
			return val;
		case "Kg":
			return val * kgTog;
		case "Ounce":
			return val * ounceTog;
		case "Pound":
			return val * lbTog;
		case "Ton":
			return val * tonTog;
		default:
			return val;
	}	
}

//conversion to cm
function ToCm(val, unit){
	switch(unit){
		case "cm":
			return val;
		case "m":
			return val * mToCm;
		case "foot":
			return val * footToCm;
		case "inch":
			return val * inchToCm;
		case "yard":
			return val * yardToCm;
		default:
			return val;
	}	
}

//conversion cm to inputted unit
function CmToUnit(val, unit){
	switch(unit){
		case "cm":
			return val;
		case "m":
			return val / mToCm;
		case "foot":
			return val / footToCm;
		case "inch":
			return val / inchToCm;
		case "yard":
			return val / yardToCm;
		default:
			return val;
	}
}

//conversion to cm squared
function ToCm2(val, unit){
	switch(unit){
		case "cm2":
			return val;
		case "m2":
			return val * m2ToCm2;
		case "foot2":
			return val * foot2ToCm2;
		case "acre":
			return val * acreToCm2;
		case "yard2":
			return val * yard2ToCm2;
		default:
			return val;
	}
}

//conversion cm squared to inputted unit
function Cm2ToUnit(val, unit){
	switch(unit){
		case "cm2":
			return val;
		case "m2":
			return val / m2ToCm2;
		case "foot2":
			return val / foot2ToCm2;
		case "acre":
			return val / acreToCm2;
		case "yard2":
			return val / yard2ToCm2;
		default:
			return val;
	}	
}

//conversion cm cubed to inputted unit
function Cm3ToUnit(val, unit){
	switch(unit){
		case "cm3":
			return val;
		case "m3":
			return val / m3ToCm3;
		case "gal":
			return val / galToCm3;
		case "litre":
			return val / litreToCm3;
		default:
			return val;
	}
}

//conversion to cm cubed
function ToCm3(val, unit){
	switch(unit){
		case "cm3":
			return val;
		case "m3":
			return val * m3ToCm3;
		case "gal":
			return val * galToCm3;
		case "litre":
			return val * litreToCm3;
		case "pint":
			return val * pintToCm3;
		default:
			return val;
	}
}

///////////////////// Mortgage Calculator
/// Algorithm Based off 
// https://jsbeginners.com/mortgage-loan-javascript-calculator/
function mortgageCalc(){
	var amount = document.getElementById("amount").value;
	var down = document.getElementById("down").value;
	var interest = parseInt(document.getElementById("interest").value)/100;
	var years = document.getElementById("years").value;
	var freq = getFrequency(document.getElementsByName("frequecy"));

	if(parseInt(amount) && parseInt(down) && parseFloat(interest) && parseInt(years) && parseInt(freq)){
		var amount = amount - down;
		var period = interest/freq
		var total = freq * years;
		var discount = (Math.pow(1 + period, total) - 1) /(period * Math.pow(1 + period, total));
		document.getElementById("payment").innerHTML = roundToAtMost(amount/discount, 2);
	}
}

//determines the frequency of payments
function getFrequency(freq){
	switch(getSelectedRadio(freq)){
		case "yearly":
			return 1;
		case "monthly":
			return 12;
		case "bi-monthly":
			return 24;
		case "weekly":
			return 52;
		default:
			return NaN;
	}
}

//rounding to at most an input
function roundToAtMost(num,numDigits){
    num = +(Math.round(num + "e+"+numDigits)  + "e-"+numDigits);
    if(isNaN(num)){
		return 0;
    }
    return num;
}



///////////////////// Quadtratic Solver
/// Algorithm based off
// https://www.progiz.com/javascript/examples/quadratic-roots
function QuadSolv(){
	var a = document.getElementById("AValue").value;
	var b = document.getElementById("BValue").value;
	var c = document.getElementById("CValue").value;

	try{
		var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);     
		var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a); 

		document.getElementById("root1").innerHTML = result;
		document.getElementById("root2").innerHTML = result2;
	}
	catch(err){
		document.getElementById("root1").innerHTML = "This Equation has no solution.";
		document.getElementById("root2").innerHTML = "";
	}
	
}