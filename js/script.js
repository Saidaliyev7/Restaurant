$(document).ready(function () {

    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        items: 1
    });
    $(document).scroll(function () {
        var scroll = $(document).scrollTop();
        var FoodOfset = $('.DeliciousFood').offset().top;
        var MenuOfset = $('.Menu').offset().top;
        var NewsOfset = $('.News').offset().top;
        var EndOfset = $('.End').offset().top;
        var EventsOfset = $('.Events').offset().top;
        if (scroll >= FoodOfset - 600) {
            $('.DeliciousFood').addClass("transform");
        }
        if (scroll >= MenuOfset - 600) {
            $('.Menu').addClass("transform");
            $('.Menu .transformOfset').css({
                "opacity": 1,
                "transform": "translateY(0px)",
                "transition": "0.s cubic-bezier(0.57, -0.26, 0.4, 1.3)"
            });
        }
        if (scroll >= NewsOfset - 600) {
            $('.News').addClass("transform");
            $('.News .NewsContent').css({
                "opacity": 1,
                "transform": "translateY(0px)",
                "transition": "0.s cubic-bezier(0.57, -0.26, 0.4, 1.3)"
            });
        }
        if (scroll >= EndOfset - 600) {
            $('.End').addClass("transform");
        }
        if (scroll >= EventsOfset - 600) {
            $('.Events').addClass("transform");
            $('.Events .EventsContent').css({
                "opacity": 1,
                "transform": "translateY(0px)",
                "transition": "0.s cubic-bezier(0.57, -0.26, 0.4, 1.3)"
            });
        }
        $('.Menu .MenuAbout').each(function (index, element) {
            $(element).css('transition-delay', index * 0.15 + 's')
        })
        $('.News .NewsContent').each(function (index, element) {
            $(element).css('transition-delay', index * 0.2 + 's')
        })
        $('.Events .EventsContent').each(function (index, element) {
            $(element).css('transition-delay', index * 0.2 + 's')
        })
    })
});