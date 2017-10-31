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
    })

    var x =

$(window).scroll(function() {
   $('body').animate({
       scrollTop:$('.DeliciousFood').offset().top;
   })
    
})

});