//  1. Window Scroll Navbar
// $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
// });


// Adding and Removing Classes

$(window).resize(function () {

  var viewportWidth = $(window).width();

  // Navbar
  if (viewportWidth < 992) {
    $(".nav-social").removeClass("nav navbar-nav ml-auto w-100 justify-content-end").addClass("list-inline"); 
    $(".resize").removeClass("nav-item").addClass("list-inline-item");
  }
  else{
    $(".nav-social").removeClass("list-inline").addClass("nav navbar-nav ml-auto w-100 justify-content-end"); 
    $(".resize").removeClass("list-inline-item").addClass("nav-item");
  }

  // Form 
  if (viewportWidth < 768) {
    $(".form-resize").removeClass("col-4").addClass("col-10"); 
  }
  else{
    $(".form-resize").removeClass("col-10").addClass("col-4"); 
  }

});

// 2. Smooth Scroll 

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#carouselExampleIndicators"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // 3. Active Nav Item
  // $( '#navbar-section .navbar-nav a' ).on( 'click', function () {
  //   $( '#navbar-section .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  //   $( this ).parent( 'li' ).addClass( 'active' );
  // });
  
  // 4. Back to Top
  // $( '#footer-section .footer-copyright a' ).on( 'click', function () {
  //   $( '#navbar-section .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  //   $('.top ').addClass( 'active' );
  // });
