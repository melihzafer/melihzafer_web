$(document).ready(function(){
    
    $(window).scroll(function(){
        var pixels = $(window).scrollTop();
        if(pixels<850){
            $(".upbut").fadeOut();
        }
        else{
            $(".upbut").fadeIn();
        }
    })
});