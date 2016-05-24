/**
 * Created by Soichiro on 5/8/2016.
 */



//Banner
$('header, main, footer').css({'visibility': 'visible'}).fadeOut(0).delay(3000).fadeIn(0).promise().done(function(){bannerAnimation()});
function bannerAnimation(){

    $('.mainBackground').hide().fadeIn(2300);

    if (window.innerWidth > 1000){
        $("#sideNav").delay(700).addClass('comingLeft');
    }

    $('#newName').hide().delay(1400).fadeIn(300).addClass('comingDown');
    $('#roleTitle').hide().delay(1400).fadeIn(300).addClass('comingDown');

    $("#bannerPaneResume").hide().delay(1600).fadeIn(300).addClass('comingDown');
    $("#bannerPaneContact").hide().delay(1600).fadeIn(300).addClass('comingDown');
}


$(function(){

//Banner
    $('.bannerPane').on({mouseenter: function(){
            $(this).removeClass('comingDown').addClass('comingUp');
        },mouseleave: function(){
            $(this).addClass('comingDown').removeClass('comingUp');
        }
    });


//SideNav
    //Scroll to each section when sidebar a's are clicked
    function scrollToDiv(id){
        id = id.replace("link","");

        $('html,body').animate({scrollTop: $("#"+id).offset().top}, 'fast');
        if ($('#profilePane').hasClass('comingDown')){
            $('#profilePane').removeClass('comingDown');
        }
    }

    $("#sideNav li a").click(function (e) {
        e.preventDefault();
        scrollToDiv($(this).attr("id"));
    });


//About

    $(window).on('scroll', function(){

        var $heightFromTop = $(window).scrollTop();
        var aboutOffsetTop =  $('#about').offset().top ;
        var projectsOffsetTop =  $('#projects').offset().top ;
        var linksOffsetTop =  $('#otherSites').offset().top ;
        var footerOffsetTop =  $('#footer').offset().top ;



        if (($heightFromTop > 500) && ($('#profilePane').hasClass('comingDown')==false)){
            $('.paneAlignmentAbout').css({'visibility': 'visible'});
            $('#profilePane').hide().fadeIn(300).addClass('comingDown');
            $('#whyPane').hide().delay(300).fadeIn(300).addClass('comingDown');
            $('#langAboutPane').hide().delay(600).fadeIn(300).addClass('comingDown');
        }

        var $endOfProjectsSection = $heightFromTop - $('#projects').outerHeight();

        /*if ($heightFromTop > 1000){
            $('#about').css({
                'position': 'fixed','top': 0
            });
            $('#projects').css({
                'top': 2000
            });
        }
        if ($heightFromTop > 2000){
            $('#projects').css({
                'top': 2000
            });
        }

        if ($heightFromTop < 1000){
            $('#about').css({
                'position': 'relative','top': 1000
            });
            $('#projects').css({
                'top': 2000
            });
        }
        if ($heightFromTop > 2000){
            $('#projectsTitle').css({
                'display': 'block'
            });

        }

        */

        console.log('Window height'+$(window).height());
        console.log('height from top: '+$heightFromTop);
        console.log('about offset top: '+aboutOffsetTop);//About; 1000 Projects 1964
        console.log('project offset top: '+projectsOffsetTop);
        console.log('links offset top: '+linksOffsetTop);
        console.log('footer offset top: '+footerOffsetTop);
        console.log('endOfProjectsSection: '+$endOfProjectsSection);

        /*if ($heightFromTop > 3000){
            $('#otherSites').css({
                'position': 'fixed','top': 0
            })
        }*/


    });


//Projects

    var $window = $(window);

    $window.trigger('scroll');

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

        //Match container height on rotate action
        var $openAllButton = $('#nwbhsFunc').add($('#nwbhsLang'));

        $window.on('scroll', function(){
            var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;

            if ($openAllButton.hasClass('rotateBack')) {
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
            }
            if ($openAllButton.hasClass('rotateForward')){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
            if ($openAllButton.hasClass('rotateForward') && $openAllButton.hasClass('rotateBack')) {
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
            if ($openAllButton.hasClass('rotateForward' || 'rotateBack') == false){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
            }
            if ($('.accordionButtonLangN').hasClass('activeButtonLangN')){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
        });//scroll

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
                panelToOpen.fadeIn();
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            } else  if($(this).hasClass('rotateForward')){
                //Open
                $(this).removeClass('rotateForward').addClass('rotateBack');
                $(':button').removeClass(activeButton);
                panelToOpen.fadeOut('fast');
                //
                var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
            } else {
                $(this).addClass('rotateForward');
                panelToOpen.fadeIn();

                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
        });
    }
    rotateIcon();

    function checkInView() {

    }
});

