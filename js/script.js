$(document).ready(function () {

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    new WOW().init();
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        autoplay:true,
        responsiveClass:true,
       items:1
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();  
         var classOfset = $('.DeliciousFood').offset().top;
        if (scroll >= classOfset-500) {
            $('.DeliciousFood').addClass();
        } 
    })
});