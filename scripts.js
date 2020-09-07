function sumar() {
  var input1 = parseInt(document.calc.input1.value);
  var input2 = parseInt(document.calc.input2.value);
  
  document.calc.result.value = input1 + input2;
}
  
function restar() {
  var input1 = document.calc.input1.value;
  var input2 = document.calc.input2.value;
  
  document.calc.result.value = input1 - input2;
}

function multiplicar() {
  var input1 = document.calc.input1.value;
  var input2 = document.calc.input2.value;
  
  document.calc.result.value = input1 * input2;
}

function dividir() {
  var input1 = document.calc.input1.value;
  var input2 = document.calc.input2.value;
  
  document.calc.result.value = input1 / input2;
}

function clearScreen() {
  document.calc.input1.value="";
  document.calc.input2.value="";
  document.calc.result.value="";
}
  