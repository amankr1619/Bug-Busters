(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000);   
    });

    // Navbar 
    
    $('.navTrigger').click(function () {
      $(this).toggleClass('active');
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
  
  });
  $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
          $('.nav').addClass('affix');
          console.log("OK");
      } else {
          $('.nav').removeClass('affix');
      }
  });
    

    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 

})(jQuery);
