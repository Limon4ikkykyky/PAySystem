$(function() {

    'use strict';

    // loader
    $.fakeLoader({
        spinner: "spinner3",
        bgColor: "#fd8070"
    });

    // swiper slider on portfolio
    $(document).ready(function () {
        var swiper = new Swiper ('.swiper-portfolio', {
          direction: 'horizontal',
          spaceBetween: 30,
          slidesPerView: 'auto',
      })
    });

    // swiper slider on testimonial
    $(document).ready(function () {
        var swiper = new Swiper ('.swiper-testimonial', {
          direction: 'horizontal',
          spaceBetween: 30,
          slidesPerView: '1',
          pagination: {
            el: '.swiper-pagination',
        },
    })
    });

    $('#nav').onePageNav();

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
        }
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    

});