//These variables connect to the id's of my html elements//
var num1input = document.getElementById("num1");
var operator = document.getElementById("operator");
var num2input = document.getElementById("num2");
var calculate = document.getElementById("calculate");
var display = document.getElementById("display");
//adding the event listener for click so users can interact with the button I created//
calculate.addEventListener("click", function(){
  var num1 = num1input.value;
  var num2 = num2input.value;
  

/* if else statements which will perfom the calculations after the user selects which operation they desire
and the differnt variables for answer correspond to that particular operation*/
 if(operator.value === "+"){
    var answera = +num1 + +num2;
    display.innerHTML = answera;
  }
  else if(operator.value === "-"){
    var answerb = num1 - num2; 
    display.innerHTML = answerb;
  }
   else if(operator.value === "*"){
    var answerc = num1 * num2; 
    display.innerHTML = answerc;
  }
   else if(operator.value === "/"){
    var answerd = num1 / num2; 
    display.innerHTML = answerd;
  }
  else if(operator.value === "^"){
    var answere = Math.pow(num1,num2);
    display.innerHTML = answere;
  }
  else if(operator.value === "sqrt"){
  var answerf = Math.sqrt(num2)
  display.innerHTML = answerf;
  }
});
