var listItems = document.getElementsByTagName("li");

var but = document.getElementsByTagName("span");
var but2 = document.getElementsByClassName("ciz");
for(var i = 0; i<but.length; i++){
but[i].addEventListener("click",
 function sil(){
     this.parentElement.remove();
    
}

);
listItems[i].addEventListener("click",
function ciz(){
    this.classList.add("tamaml");
}
);
}

var input = document.getElementsByTagName("input")[0];
// console.log(input);
input.addEventListener("keypress",function(e){
    // console.log(e.keyCode);
    if (e.keyCode===13) {
        

        var newTxt = document.createElement("li");
        newTxt.innerHTML=input.value;
        var newSpan = document.createElement("span");
        var newIcon = document.createElement("i");
        newIcon.setAttribute("class","fa fa-window-close");

        newSpan.insertBefore(newIcon, newSpan.firstChild);
        newTxt.insertBefore(newSpan, newTxt.firsChild);
         var ul = document.getElementsByTagName("ul")[0];
         ul.insertBefore(newTxt, ul.lastChild);
         var listItems = document.getElementsByTagName("li");

var but = document.getElementsByTagName("span");
var but2 = document.getElementsByClassName("ciz");
for(var i = 0; i<but.length; i++){
but[i].addEventListener("click",
 function sil(){
     this.parentElement.remove();
    
}

);
listItems[i].addEventListener("click",
function ciz(){
    this.classList.add("tamaml");
}
);
}
    input.value="";

    }
});













// alert("hey");
// function iai(){
//     var listItems = document.getElementsByTagName("li");

// var but = document.getElementsByTagName("span");
// var but2 = document.getElementsByClassName("ciz");
// for(var i = 0; i<but.length; i++){
// but[i].addEventListener("click",
//  function sil(){
//      this.parentElement.remove();
    
// }

// );
// listItems[i].addEventListener("click",
// function ciz(){
//     this.classList.toggle("tamaml");
// }
// );
// }
// }
// iai();
// for(var x = 0; x<listItems.length; x++){

//     listItems[x].addEventListener("click",
//     function ciz(){
//         this.classList.toggle("tamaml");
//     }
//     );
//      } 

