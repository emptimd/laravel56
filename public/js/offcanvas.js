jQuery(document).ready(function($) {
    function a() {
        var a = document.createElement("event"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                transition: "transitionend"
            };
        for (var s in e)
            if (void 0 !== a.style[s]) return e[s]
    }
    var e = a();
    $('[data-toggle="offcanvas"], .overlay').click(function() {
        $(".overlay").toggleClass("active"), $("body").toggleClass("active"), $(".row-offcanvas").toggleClass("active"), $(".sidebar-offcanvas").toggleClass("active"), $(".navbar-toggle").toggleClass("collapsed"), $(".navbar-collapse").addClass("transition"), $(".transition").one(e, function(a) {
            $(".navbar-collapse").removeClass("transition")
        })
    }), $(".navbar .nav a").click(function() {
        $(".overlay").removeClass("active"), $("body").removeClass("active"), $("#navbar").removeClass("in"), $(".row-offcanvas").removeClass("active"), $(".sidebar-offcanvas").removeClass("active"), $(".navbar-toggle").addClass("collapsed"), $(".transition").one(e, function(a) {
            $(".navbar-collapse").removeClass("transition")
        })
    })
});