(function ($) {
    $(document).ready(function(){
  
      // hide .navbar first
  
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 20) {
                  $('.navbar').addClass("in");
              } else {
                  $('.navbar').removeClass("in");
              }
          });
      });
  
  });
    }(jQuery));