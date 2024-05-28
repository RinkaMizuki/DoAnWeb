$(window).on('load', function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");

  $.get("http://127.0.0.1:5501/subpage/header.html", function (data) {
    $(".header").html(data);
  }).done(function () {
    $('.search-switch').on('click', function () {
      console.log(123);
      $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
      $('.search-model').fadeOut(400, function () {
        $('#search-input').val('');
      });
    });
    //Menu
    $(".canvas__open").on('click', function () {
      $(".offcanvas-menu-wrapper").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
      $(".offcanvas-menu-wrapper").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
    $(".mobile-menu").slicknav({
      prependTo: '#mobile-menu-wrap',
      allowParentLinks: true
    });
    $('.collapse').on('shown.bs.collapse', function () {
      $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
      $(this).prev().removeClass('active');
    });
  });
  $.get("http://127.0.0.1:5501/subpage/footer.html", function (data) {
    $(".footer").html(data);
  });
});