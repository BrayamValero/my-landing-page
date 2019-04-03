//  1. Window Scroll Navbar
// $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
// });

// 2. Smooth Scroll 

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
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
