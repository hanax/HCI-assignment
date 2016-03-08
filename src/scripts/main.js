import 'normalize-css';
import '../styles/index.styl';

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

  $(window).scroll(() => {
    if ($("body").scrollTop() > windowHeight / 4) {
      $(".header-stick .title").fadeIn("slow");
    } else {
      $(".menu-dropdown").fadeOut("fast");
      $(".header-stick .title").fadeOut("slow");
    }
  });

  $(".menu").click(() => {
    $(".menu-dropdown").fadeToggle("fast");
  });

  $("body").click((e) => {
    const t = $(e.target);
    if (!t.closest(".menu").length && !t.closest(".menu-dropdown").length) {
      $(".menu-dropdown").fadeOut("fast");
    }
  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  // $(window).scroll(function() {
  //     if ($("header").offset().top > 40) {
  //         $("header img").addClass("stick");
  //     } else {
  //         $("header img").removeClass("stick");
  //     }
  // });
});
