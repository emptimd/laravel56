$(function() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.crunchify-top').fadeIn(duration);
        } else {
            jQuery('.crunchify-top').fadeOut(duration);
        }
    });

    $('.crunchify-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    if($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            items: 1,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            dots: true,
        });
    }

});
