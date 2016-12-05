//Allows for the generation of variables to be implemented on the website
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

colorChangeButton.addEventListener("click", function (){
    document.body.style.backgroundColor = newBGColor.value;
})