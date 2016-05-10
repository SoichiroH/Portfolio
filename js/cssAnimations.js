/**
 * Created by Soichiro on 5/8/2016.
 */

$(document).ready(function(){

    'use strict';

    var $ripple = $('.js-ripple');

    $ripple.on('click.ui.ripple', function(e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.c-ripple__circle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });
});

