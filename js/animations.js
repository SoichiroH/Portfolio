/**
 * Created by Soichiro on 5/8/2016.
 */

$(document).ready(function(){

    $(window).load(function () {
        //$('#ajaxLoader').show();
        //setTimeout(bannerAnimation, 1000);

    });
    //$('html,body').append('<div class="box loading"></div>');

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

//Banner
    function bannerAnimation(){

        $("#sideNav").hide().slideDown(1200);

        $("#sideNav").animate({
            'transform': 'translateX(-100%)'
        },1000, function(){
            console.log('call back');

        });

        $('.mainBackground').hide().fadeIn(2500);

        $('#newName').hide().fadeIn(2700);
        $('#roleTitle').hide().fadeIn(2700)

        $("#bannerPaneResume").hide().animate({ height: 'toggle', opacity: 'toggle' }, 3000);
        $("#bannerPaneContact").hide().delay(300).animate({ height: 'toggle', opacity: 'toggle' }, 3000);
        //$("#bannerPaneResume").animate({ height: 0, opacity: 0 }, 'slow');
        $('#bannerPaneContact').on('mouseover', function(){
            $(this).animate({
                'marginTop': "-=20"
            }, 200, function(){
                $(this).animate({
                    'marginTop': "+=20"
                });
                console.log('hovered to contact');
            });
        });
    }
    bannerAnimation();
});

