/**
 * Created by Soichiro on 5/8/2016.
 */

$('header, main, footer').css({'visibility': 'visible'}).fadeOut(0).delay(3000).fadeIn(0).promise().done(function(){bannerAnimation()});

//Banner
function bannerAnimation(){
    console.log('start banner animation');

    $("#sideNav").hide().slideDown(1200);

    $("#sideNav").animate({
        'transform': 'translateX(-100%)'
    },1000, function(){
        console.log('call back');

    });

    $('.mainBackground').hide().fadeIn(2500);

    $('#newName').hide().fadeIn(2700);
    $('#roleTitle').hide().fadeIn(2700);

    $("#bannerPaneResume").hide().animate({ height: 'toggle', opacity: 'toggle' }, 2700);
    $("#bannerPaneContact").hide().animate({ height: 'toggle', opacity: 'toggle' }, 2700);
}



$(function(){

//Sidebar
    //Scroll to each section when sidebar a's are clicked
    function scrollToDiv(id){

        id = id.replace("link","");

        $('html,body').animate({
                scrollTop: $("#"+id).offset().top},
            'slow');
    }

    var sideNav = document.getElementsByName("sideNav");

    $("#sideNav li a").click(function (e) {
        e.preventDefault();
        scrollToDiv($(this).attr("id"));
    });
});

