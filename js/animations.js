/**
 * Created by Soichiro on 5/8/2016.
 */



//Banner
$('header, main, footer').css({'visibility': 'visible'}).fadeOut(0).delay(3000).fadeIn(0).promise().done(function(){bannerAnimation()});
function bannerAnimation(){
    var windowHeight = $(window).height();
    $('#banner').css({'height':windowHeight});

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
    $('#bannerlink').on('click', function(){
        $('body').not(':animated').animate({scrollTop: 0}, 'slow');
    });
    $('#aboutlink').on('click', function(){
        var windowHeight = $(window).height();
        $('body').not(':animated').animate({scrollTop: windowHeight}, 'slow');
    });
    $('#projectslink').on('click', function(){
        var windowHeight = $(window).height();
        var projectTop = windowHeight+$('#about').outerHeight();
        $('body').not(':animated').animate({scrollTop: projectTop}, 'slow');
    });
    $('#otherSiteslink').on('click', function(){
        var windowHeight = $(window).height();
        var linksTop = windowHeight+$('#about').outerHeight()+$('#projects').outerHeight();
        $('body').not(':animated').animate({scrollTop: linksTop}, 'slow');
    });

//About

    var scrolledAllTheWayDown = false;

    $(window).on('scroll', function(){

        var $heightFromTop = $(window).scrollTop();

        if (($heightFromTop > 500) && ($('#profilePane').hasClass('comingDown')==false)){
            $('.paneAlignmentAbout').css({'visibility': 'visible'});
            $('#profilePane').hide().fadeIn(300).addClass('comingDown');
            $('#whyPane').hide().delay(300).fadeIn(300).addClass('comingDown');
            $('#langAboutPane').hide().delay(600).fadeIn(300).addClass('comingDown');
        }

        var windowHeight = $(window).height();
        var aboutSectionHeight = $('#about').outerHeight();
        var projectsSectionHeight = $('#projects').outerHeight();
        var linkSectionHeight = $('#otherSites').outerHeight();
        var windowAndAboutHeight = windowHeight+aboutSectionHeight;

        $('#about').css({'top':windowHeight});
        $('.linksBackgroundContainer').css({'top':(windowAndAboutHeight+projectsSectionHeight)});


        if (aboutSectionHeight != 0 && ($heightFromTop >= aboutSectionHeight)){
            $('#about').css({
                'position': 'fixed',
                'top':(windowHeight-aboutSectionHeight)
            });
            $('.projectsBackgroundContainer').css({'transform': 'translateY('+windowAndAboutHeight+')'});
        }
        if (aboutSectionHeight != 0 && ($heightFromTop < aboutSectionHeight)){
            $('#about').css({
                'position': 'relative'
                //,'top':(windowHeight-aboutSectionHeight)
            });
            $('#projects').css({'top':windowHeight+aboutSectionHeight});
        }

        if (projectsSectionHeight != 0 && ($heightFromTop >= (projectsSectionHeight+aboutSectionHeight)) && scrolledAllTheWayDown == false){
            $('.projectsBackgroundContainer').css({
                'position': 'fixed',
                'top':(windowHeight-projectsSectionHeight),

            });
            $('.linksBackgroundContainer').css({'transform': 'translateY('+(aboutSectionHeight + projectsSectionHeight)+')'});

            scrolledAllTheWayDown = true;
        } else if (aboutSectionHeight != 0 && ($heightFromTop < (projectsSectionHeight+aboutSectionHeight) && scrolledAllTheWayDown == true)){
            $('#projects').css({
                'position': 'relative',
                'top':(windowAndAboutHeight)
            });
            $('.projectsBackgroundContainer').css({'transform': 'translateY('+windowAndAboutHeight+projectsSectionHeight+')'});
            scrolledAllTheWayDown = false;
        }

        //Match pane height
        var column1Height = $('.column1-3').outerHeight();
        var column2Height =  $('.column2-3').outerHeight();
        var container1Height = $('#profilePane').innerHeight()-40;
        var container2Height = $('.column2-3').innerHeight()-40;

        if (column1Height > column2Height){
            $('#whyPane').add($('#langAboutPane')).css({
                'height': container1Height
            });
            if ($('.accordionButtonLangA').hasClass('activeButtonLangA')){
                $('.column3-3').add($('#langAboutPane')).css({'height': ''});
            }
        } else if (column1Height < container2Height){
            $('#whyPane').css({
                'height': ''
            });
            $('#profilePane').add($('#langAboutPane')).css({
                'height': container2Height
            })
        }
    });

//Projects

    //Panes coming down

    $(window).scroll(function(){

        var heightFromTop = $(window).scrollTop();

        if ((heightFromTop > 1500) && ($('#nwbhsSynopsisPane').hasClass('comingDown')==false)){
            $('.paneAlignmentProject').css({'visibility': 'visible'});
            $('#nwbhsSynopsisPane').hide().fadeIn(300).addClass('comingDown');
            $('#nwbhsFuncPane').hide().delay(300).fadeIn(300).addClass('comingDown');
        }
    });


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
                console.log('has rotate back');
            }
            if ($openAllButton.hasClass('rotateForward')){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
            if ($openAllButton.hasClass('rotateForward' && 'rotateBack')) {
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
            if ($openAllButton.hasClass('rotateForward' || 'rotateBack') == false){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
            }
            if ($('.accordionButtonLangN').hasClass('activeButtonLangN')){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
        });

        //Open All
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
                if ($(this).is($('#nwbhsFunc'))){
                    var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
                    $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
                }else {
                    $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                }
            } else {
                $(this).addClass('rotateForward');
                panelToOpen.fadeIn();
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }
        });
    }
    rotateIcon();

    $('#githubIcon').on({mouseenter: function(){
        $(this).removeClass('comingDown').addClass('comingUp');
    },mouseleave: function(){
        $(this).addClass('comingDown').removeClass('comingUp');
    }});
    $('#facebookIcon').on({mouseenter: function(){
        $(this).removeClass('comingDown').addClass('comingUp');
    },mouseleave: function(){
        $(this).addClass('comingDown').removeClass('comingUp');
    }});


//Links
    $(window).scroll( function(){
            var linksTop = $('#otherSites').position().top;
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if( (linksTop != 0)&&(bottomOfWindow >= linksTop) ){
                console.log('bottomOfwindow > linkstop');
                $('#about').add($('#banner')).removeClass('projectMask1').addClass('projectMask00');
                $('#projects').removeClass('projectMask1').addClass('projectMask03');
            } else if (bottomOfWindow < linksTop){
                $('#about').add($('#banner')).removeClass('projectMask00').addClass('projectMask1');;
                $('#projects').removeClass('projectMask03').addClass('projectMask1');
            }
    });
});

