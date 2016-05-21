/**
 * Created by Soichiro on 5/8/2016.
 */



//Banner
$('header, main, footer').css({'visibility': 'visible'}).fadeOut(0).delay(3000).fadeIn(0).promise().done(function(){bannerAnimation()});
function bannerAnimation(){
    $("#sideNav").hide().slideDown(1200);
    $("#topNav").hide().slideDown(1200);

    $('.mainBackground').hide().fadeIn(2500);

    $('#newName').hide().fadeIn(2700);
    $('#roleTitle').hide().fadeIn(2700);

    $("#bannerPaneResume").hide().animate({ height: 'toggle', opacity: 'toggle' }, 2700);
    $("#bannerPaneContact").hide().animate({ height: 'toggle', opacity: 'toggle' }, 2700);
}


$(function(){
//SideNav
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

    //Rotate Icon and show all accordions
    function rotateIcon() {

        //NWBHS
        //Function
        var $nFunc = '#nwbhsFunc';
        var accordionPanel = $('.accordionPanel');
        var activeFunc = 'activeButton';
        //Languages
        var $nLang = '#nwbhsLang';
        var accordionPanelLangN = $('.accordionPanelLangN');
        var activeLang = 'activeButtonLangN';

        //Common
        var clickedId, panelToOpen, activeButton;

        $('.openAll').on('click', function (){
            if ($(this).is($nFunc)){
                clickedId = accordionPanel;
                panelToOpen = accordionPanel;
                activeButton = activeFunc;
            }
            if ($(this).is($nLang)){
                clickedId = accordionPanelLangN;
                panelToOpen = accordionPanelLangN;
                activeButton = activeLang;
            }

            //Rotate
            if($(this).hasClass('rotateBack')) {
                $(this).removeClass('rotateBack').addClass('rotateForward');
                panelToOpen.slideDown();
            } else  if($(this).hasClass('rotateForward')){
                $(this).removeClass('rotateForward').addClass('rotateBack');
                $(':button').removeClass(activeButton);
                panelToOpen.slideUp();
            } else {
                $(this).addClass('rotateForward');
                panelToOpen.slideDown();
            }
        });
    }
    rotateIcon();
});

