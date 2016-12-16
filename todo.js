//defined variables based off of my html elements//
var todo=document.getElementById("todo");
var list=document.getElementById("list");
var disp=document.getElementById("disp");
var coloring=document.getElementById("coloring")
var clearBtn=document.getElementById("clearBtn")

//the event listener allows the user to display their todo list item once they "click"//
list.addEventListener("click",function(){
  
  if (coloring.value === "blue"){
    disp.innerHTML+="<div style='color:blue'>"+ todo.value+"</div>"
  
  }
  else if (coloring.value === "red"){
    disp.innerHTML+="<div style='color:red'>"+ todo.value+"</div>"

  }
  else if (coloring.value === "black"){
    disp.innerHTML+="<div style='color:black'>"+ todo.value+"</div>"

  }
  
  else if (coloring.value === "white"){
    disp.innerHTML+="<div style='color:white'>"+ todo.value+"</div>"

  }
});

//Clicking the listed item will remove the targeted event//
disp.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
})

/*When the user clicks the button, the inner HTML will be directed to an empty string, 
thus displaying what the user would see as nothing*/
clearBtn.addEventListener("click", function(){
  disp.innerHTML = ""
})