
function add(){

  var num1 = parseInt(document.getElementById("number1").value, 10);
  var num2 = parseInt(document.getElementById("number2").value, 10);

  var sum = num1 + num2;

  document.getElementById("result").innerHTML = sum;
}

function minus(){
  var num1 = parseInt(document.getElementById("number1").value, 10);
  var num2 = parseInt(document.getElementById("number2").value, 10);

  var difference = num1 - num2;
  document.getElementById("result").innerHTML = difference;
}

function multiply(){
  var num1 = parseInt(document.getElementById("number1").value, 10);
  var num2 = parseInt(document.getElementById("number2").value, 10);

  var product = num1 * num2;
  document.getElementById("result").innerHTML = product;
}
function divide(){
  var num1 = parseInt(document.getElementById("number1").value, 10);
  var num2 = parseInt(document.getElementById("number2").value, 10);

  var quotient = num1 / num2;
  document.getElementById("result").innerHTML = quotient;
}
