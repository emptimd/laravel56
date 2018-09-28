$(function() {
    let offset = 220;
    let duration = 500;
    let $crunchify = $('.crunchify-top');

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $crunchify.fadeIn(duration);
        } else {
            $crunchify.fadeOut(duration);
        }
    });

    $crunchify.click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    let $owl = $('.owl-carousel');
    if($owl.length) {
        $owl.owlCarousel({
            items : 1,
            loop: false,
            center: true,
            nav: true
        });
    }


});