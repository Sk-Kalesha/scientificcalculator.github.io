function square(){
	document.calc.result.value = Math.pow(document.calc.result.value, 2);
}

function sin(){
	document.calc.result.value=Math.sin(document.calc.result.value);
}

function cos(){
    document.calc.result.value=Math.cos(document.calc.result.value);
}

function tan(){
    document.calc.result.value=Math.tan(document.calc.result.value);
}

function cubed(){
	document.calc.result.value = Math.pow(document.calc.result.value, 3);
}

function allClear(){
	document.calc.result.value="";
}

function BACKSPC(){
    var a = document.calc.result.value;
	document.calc.result.value = a.substr(0, a.length-1);
}

function percent(){
    document.calc.result.value = document.calc.result.value / 100;
}

function sqrt2(){
	document.calc.result.value = Math.pow(document.calc.result.value, 1/2);
}

function sqrt3(){
	document.calc.result.value = Math.pow(document.calc.result.value, 1/3);
}

function log10(){
    document.calc.result.value = Math.log10(document.calc.result.value);
}

function onDivision(){
    document.calc.result.value = 1 / document.calc.result.value;
}

function number(value){    
	document.calc.result.value += value;
}

function equal(){
	document.calc.result.value=eval(document.calc.result.value);    
}