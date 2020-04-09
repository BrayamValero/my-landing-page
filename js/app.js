var openPhotoSwipe = function() {
    
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;

    };
  
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

    var galleryElements = document.querySelectorAll('.'+ this.getAttribute('id'))[0];
    items = parseThumbnailElements(galleryElements);

    // define options (if needed)
    var options = {
        index: 0 // start at first slide
    };

    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

};


document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('gallery-1').onclick = openPhotoSwipe;
    document.getElementById('gallery-2').onclick = openPhotoSwipe;
    document.getElementById('gallery-3').onclick = openPhotoSwipe;
    document.getElementById('gallery-4').onclick = openPhotoSwipe;
    document.getElementById('gallery-5').onclick = openPhotoSwipe;
    document.getElementById('gallery-6').onclick = openPhotoSwipe;

});


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#carousel-gallery"]')
    .not('[href="#carousel-control-prev-icon"]')
    .not('[href="#carousel-control-next-icon"]')
        .click(function(event) {

            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
                
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
                        // if ($target.is(":focus")) { // Checking if the target was focused
                        //   return false;
                        // } else {
                        //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        //   $target.focus(); // Set focus again
                        // };
                    });
                }
            }
        });