$(function() {
    "use strict";
    // These classes have their opacity reduced to 0 in CSS to avoid animation glitching.

    $('.delay2').on('inview', function(event, visible) {
        if (visible) { $(this).addClass('dp2'); }
    });
    $('.delay3').on('inview', function(event, visible) {
        if (visible) { $(this).addClass('dp3'); }
    });
    $('.delay4').on('inview', function(event, visible) {
        if (visible) { $(this).addClass('dp4'); }
    });
    $('.delay5').on('inview', function(event, visible) {
        if (visible) { $(this).addClass('dp5'); }
    });
    $('.delay6').on('inview', function(event, visible) {
        if (visible) { $(this).addClass('dp6'); }
    });
    $('.delay8').on('inview', function(event, visible) {
        if (visible) { $(this).addClass('dp8'); }
    });
    $('.delay10').on('inview', function(event, visible) {
        if (visible) { $(this).addClass('d1'); }
    });

    $('.fade-right').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInRight');
        }
    });
    $('.fade-left').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInLeft');
        }
    });
    $('.fade-up').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInUp');
        }
    });
    $('.fade-down').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInDown');
        }
    });

});
