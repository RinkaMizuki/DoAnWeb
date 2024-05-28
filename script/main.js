'use strict';

(function ($) {

    $(window).on('load', function () {

        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            const containerEl = document.querySelector('.product__filter');
            const mixer = mixitup(containerEl);
        }
    });

    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Slider
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });


    $("select").niceSelect();

})(jQuery);