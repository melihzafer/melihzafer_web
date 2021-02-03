let ben = document.getElementById("el1");
let sagel1 = document.getElementById("el4");
let sagel2 = document.getElementById("el5");
let sagel3 = document.getElementById("el6");

let kck1 = document.getElementById("kck1");
let kck2 = document.getElementById("kck2");
let kck3 = document.getElementById("kck3");
let el = document.getElementById("elgo");

let myscore = document.getElementById("par1");
let compscore = document.getElementById("par2");

var num;
var b;
var me=0;
var comp=0;
function kc1(){
    ben.setAttribute("src", `r1.png`);
   num=1;
   
    
}
function kc2(){
    ben.setAttribute("src", `p1.png`);
    num=2;
    
}
function kc3(){
    ben.setAttribute("src", `s1.png`);
    num=3;
   
}


 function startt(){
     


 b = Math.floor(Math.random() * (4 - 1) ) + 1;
    el.classList.add("gosterme");
  
    if(b==1){
       
        sagel1.classList.add("goster");
        sagel2.classList.remove("goster");
        sagel3.classList.remove("goster");
        console.log(b);




      
    }
    if(b==2){
       
        sagel2.classList.add("goster");
        sagel1.classList.remove("goster");
        sagel3.classList.remove("goster");
        console.log(b);
       
    }
    if(b==3){
      
        sagel3.classList.add("goster");
        sagel2.classList.remove("goster");
        sagel1.classList.remove("goster");
        console.log(b);
  
    
    }
}

function score() {

    if(num==b){
comp+=0;
me+=0;
    }
    if(num==1 && b==2){
     comp++;

    }
    if(num==2 && b==3){
     comp++;
   
       }
       if(num==3 && b==1){
        comp++;
      
          }
          if(num==2 && b==1){
            me++;
          
              }
              if(num==3 && b==2){
                me++;
              
                  }
                  if(num==1 && b==3){
                    me++;
                  
                      }

                      myscore.innerHTML=me;
                      compscore.innerHTML=comp;
console.log("Score: ",me,comp);

}
