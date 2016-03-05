import 'normalize-css';
import '../styles/index.styl';

$(() => {
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
