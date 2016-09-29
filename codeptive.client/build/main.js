$(function () {

    "use strict";

    // Stick Top
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
    if (scroll >= 20) sticky.addClass('fix');
    else sticky.removeClass('fix');

    $(window).on('scroll', function () {
        var sticky = $('.sticky'),
            navItem = $('.nav-item'),
            nav = $('nav'),
            scroll = $(window).scrollTop();

        if (scroll >= 5) {
            sticky.addClass('fix');
            navItem.removeClass('border-left');
            nav.addClass('padding-adjust');
        } else {
            sticky.removeClass('fix');
            navItem.addClass('border-left');
            nav.removeClass('padding-adjust');
        }
    });

    // search init
    $(document).ready(function (e) {
        $('.search-panel .dropdown-menu').find('a').click(function (e) {
            e.preventDefault();
            var param = $(this).attr("href").replace("#", "");
            var concept = $(this).text();
            $('.search-panel span#search_concept').text(concept);
            $('.input-group #search_param').val(param);
        });
    });

    $(window).on('scroll', function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 5) sticky.addClass('header-shadow');
        else sticky.removeClass('header-shadow');
    });

    // Menu Operator
    $('nav.main_nav').children().clone().appendTo(".mobile-nav");
    $('a.cd-nav-trigger').on('click', function(e) {
        e.preventDefault();
        var b = $('body'),
            nav = $('nav'),
            sb = $('.social-button');
        if (b.hasClass('open')) {
            nav.removeClass('pf');
            b.addClass('slideclose');
            setTimeout(function() { b.removeClass('open'); }, 100);
        } else {
            b.addClass('open').removeClass('slideclose');
            sb.removeClass('fadeInUp');
            setTimeout(function() {
                nav.addClass('pf');
                sb.addClass('fadeInUp');
            }, 400);
        }
    });

    // Testminial Slider
    $('#testimonial-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true
    });

    // Gallery Slider
    $('.gallery-slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            450: {
                items: 3,
                autoWidth: false
            },
            850: {
                items: 4,
                autoWidth: false
            },
            1000: {
                items: 5
            }
        }
    });

    $(window).resize(function() {
        $('.gallery-slider').trigger('refresh.owl.carousel');
    });
});


// Equal Height for Pricing & Hover actions for Pricing
$(function() {
    'use strict';

    $('.item, .f_t').matchHeight();

    $('.item').hover(function() {
        $(this).siblings().toggleClass('faded_item');
    });

    $('.item-gal').hover(function() {
        $(this).parent().siblings().toggleClass('faded_item');
    });

    $('.item .button2').hover(function() {
        $(this).parent().parent().toggleClass('button_ready');
    });


    //Navigation Movement
    setTimeout(function() {
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                setTimeout(function() {
                    var b = $('body');
                    $('nav').removeClass('pf');
                    b.addClass('slideclose');
                    setTimeout(function() { b.removeClass('open'); }, 100);
                }, 1);
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 20
                }, 500);
            }
        });
    }, 100);

});
