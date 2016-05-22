/**
 * Created by Soichiro on 5/8/2016.
 */



//Banner
$('header, main, footer').css({'visibility': 'visible'}).fadeOut(0).delay(3000).fadeIn(0).promise().done(function(){bannerAnimation()});
function bannerAnimation(){
    //$("#sideNav").hide().slideDown(1200);
    if (window.innerWidth > 1000){
        $("#sideNav").hide().fadeIn(0).addClass('comingLeft');
    }

    //$("#topNav").hide().slideDown(1200);
    $("#topNav").hide().delay(600).fadeIn(100).addClass('comingDown');

    $('.mainBackground').hide().delay(700).fadeIn(2300);

    $('#newName').hide().delay(1200).fadeIn(200).addClass('comingDown');
    $('#roleTitle').hide().delay(1200).fadeIn(200).addClass('comingDown');

    $("#bannerPaneResume").hide().delay(1400).fadeIn(200).addClass('comingDown');
    $("#bannerPaneContact").hide().delay(1400).fadeIn(200).addClass('comingDown');
}


$(function(){

//Banner
    $('.bannerPane').on({mouseenter: function(){
            $(this).removeClass('comingDown');
            $(this).addClass('comingUp');
            console.log('mouse enter on bannerpane');
        },mouseleave: function(){
            $(this).addClass('comingDown');
            $(this).removeClass('comingUp');
        }
    });


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

//Projects
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

