$(window).on('load', function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");

  $.get("https://nguyenhuynhduc.netlify.app/subpage/header.html", function (data) {
    $(".header").html(data);
  }).done(function () {
    $('.search-switch').on('click', function () {
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

    const menuList = $('.menu-list');
    menuList.map(function (index, elm) {
      Array.from(elm.children).forEach(function (elmChild) {
        if (elmChild.children[0].hasAttribute('href')) {
          const tempLink = document.createElement('a');
          tempLink.href = elmChild.children[0].getAttribute('href');

          const fullUrl = tempLink.href;
          if (fullUrl === window.location.href) {
            elmChild.classList.add('active');
          } else {
            elmChild.classList.remove('active');
          }
        }
      })
    })
  });
  $.get("https://nguyenhuynhduc.netlify.app/subpage/header", function (data) {
    $(".footer").html(data);
  });
});