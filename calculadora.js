
var operand = 0;
var mem = 0;
var operation = "";

function addNumber(number){
	display.innerHTML += number;
}

function deleteDisplay(){
	display.innerHTML = "";
}

function resetVariables(){
	mem = 0;
	operand = 0;
	operation = "";
}

function sum(op){
	mem += parseInt(op);
	operation = "+";
	deleteDisplay();
}

function substract(op){
	mem += parseInt(op);
	operation = "-";
	deleteDisplay();
}

function multiply(op){
	mem += parseInt(op);
	operation = "*";
	deleteDisplay();
}

function divide(op){
	mem += parseInt(op);
	operation = "/";
	deleteDisplay();
}

$(document).ready(function(){

	var display = document.getElementById('display');
	
	$("#key0").click(function(){
		addNumber("0");
	});

	$("#key1").click(function(){
		addNumber("1");
	});

	$("#key2").click(function(){
		addNumber("2");
	});

	$("#key3").click(function(){
		addNumber("3");
	});

	$("#key4").click(function(){
		addNumber("4");
	});

	$("#key5").click(function(){
		addNumber("5");
	});

	$("#key6").click(function(){
		addNumber("6");
	});

	$("#key7").click(function(){
		addNumber("7");
	});

	$("#key8").click(function(){
		addNumber("8");
	});

	$("#key9").click(function(){
		addNumber("9");
	});

	$("#keyDel").click(function(){
		deleteDisplay();
	});

	$("#keySum").click(function(){
		sum(display.innerHTML);
	});

	$("#keySubs").click(function(){
		substract(display.innerHTML);
	});

	$("#keyx").click(function(){
		multiply(display.innerHTML);
	});

	$("#keydiv").click(function(){
		divide(display.innerHTML);
	});	
	
	$("#keyEqual").click(function(){
		if(operation == "+"){
			operand = parseInt(display.innerHTML);
			var result = mem + operand;
			display.innerHTML = result;
			resetVariables();
		}
		if(operation == "-"){
			operand = parseInt(display.innerHTML);
			var result = mem - operand;
			display.innerHTML = result;
			resetVariables();
		}
		if(operation == "*"){
			operand = parseInt(display.innerHTML);
			var result = mem * operand;
			display.innerHTML = result;
			resetVariables();
		}
		if(operation == "/"){
			operand = parseInt(display.innerHTML);
			var result = mem / operand;
			display.innerHTML = Math.floor(result);
			resetVariables();
		}
	});
});



