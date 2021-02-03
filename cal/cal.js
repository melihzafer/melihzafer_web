let dugme = document.getElementsByTagName("button");
for (var i =0; i<16; i++) {
    if(i!=14 && i!=16) {
        dugme[i].addEventListener("click", yazdir)
    }
}
let ekran = document.getElementsByClassName("ekran1")[0];
function yazdir(){
    ekran.value = ekran.value + this.value;
}
let hesapla = document.getElementById("hesapla");
hesapla.addEventListener("click", hesap);
function hesap(){
    
    ekran.value = eval(ekran.value);
}
let temizle = document.getElementById("temizle");
temizle.addEventListener("click", temiz);
function temiz(){
    ekran.value = "";
}