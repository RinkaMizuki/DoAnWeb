'use strict';

(function ($) {

    $(window).on('load', function () {
        // $(".loader").fadeOut();
        // $("#preloder").delay(200).fadeOut("slow");

        // $.get("http://127.0.0.1:5501/subpage/header.html", function (data) {
        //     $(".header").html(data);
        // }).done(function () {
        //     $('.search-switch').on('click', function () {
        //         console.log(123);
        //         $('.search-model').fadeIn(400);
        //     });

        //     $('.search-close-switch').on('click', function () {
        //         $('.search-model').fadeOut(400, function () {
        //             $('#search-input').val('');
        //         });
        //     });
        //     //Menu
        //     $(".canvas__open").on('click', function () {
        //         $(".offcanvas-menu-wrapper").addClass("active");
        //         $(".offcanvas-menu-overlay").addClass("active");
        //     });

        //     $(".offcanvas-menu-overlay").on('click', function () {
        //         $(".offcanvas-menu-wrapper").removeClass("active");
        //         $(".offcanvas-menu-overlay").removeClass("active");
        //     });
        //     $(".mobile-menu").slicknav({
        //         prependTo: '#mobile-menu-wrap',
        //         allowParentLinks: true
        //     });
        //     $('.collapse').on('shown.bs.collapse', function () {
        //         $(this).prev().addClass('active');
        //     });

        //     $('.collapse').on('hidden.bs.collapse', function () {
        //         $(this).prev().removeClass('active');
        //     });
        // });
        // $.get("http://127.0.0.1:5501/subpage/footer.html", function (data) {
        //     $(".footer").html(data);
        // });

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