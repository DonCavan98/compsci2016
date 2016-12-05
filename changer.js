//Allows for the generation of variables to be implemented on the website
var colorInput = document.getElementById("colorInput");
var colorChangeButton = document.getElementById("colorChangeButton");

colorChangeButton.addEventListener("click", function (){
    document.body.style.backgroundColor = colorInput.value;
})