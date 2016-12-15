var todo=document.getElementById("todo");
var list=document.getElementById("list");
var disp=document.getElementById("disp");

btn.addEventListener("click",function(){
  disp.innerHTML+="<div>"+ inp.value+"</div>"

});

disp.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
})