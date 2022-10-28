(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);



$(function () {
  $(".service-item").hover(
    function () {
      $(".service-icon").css(
        "background-color", window.getComputedStyle(document.body)['backgroundColor']
      );
    },
    function () {
      // on mouseout, reset the background colour
      $(".service-icon").css("background-color", "");
    }
  );

  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-filter li").on("click", function () {
    $("#portfolio-filter li").removeClass("filter-active");
    $(this).addClass("filter-active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

});

