function calculator(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) + Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}

function calculator1(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) - Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}

function calculator2(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) * Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}

function calculator3(){
  var num1 = document.getElementById("numberInput1").value;
  var num2 = document.getElementById("numberInput2").value;
  var calOutput;
  console.log(num1);
  console.log(num2);

  calOutput = Number(num1) / Number(num2);
  console.log(calOutput);
  document.getElementById("finalOutput").innerHTML = calOutput;
}
