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
/*

        console.log($heightFromTop);
        console.log('lnks offset top'+$('#otherSites').offset().top);
        $('footer').css({'position':'fixed','top': 600});

        console.log('footer offset top'+$('#footer').offset().top);

*/

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
                'z-index': 10
            });
            $('.linksBackgroundContainer').css({'transform': 'translateY('+(aboutSectionHeight + projectsSectionHeight)+')'});

            scrolledAllTheWayDown = true;
        } else if (aboutSectionHeight != 0 && ($heightFromTop < (projectsSectionHeight+aboutSectionHeight) && scrolledAllTheWayDown == true)){
            $('#projects').css({
                'position': 'relative',
                'z-index': 11,
                'top':(windowAndAboutHeight)
            });
            $('.projectsBackgroundContainer').css({'transform': 'translateY('+windowAndAboutHeight+projectsSectionHeight+')'});
            scrolledAllTheWayDown = false;
        }
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

/*                if ($(this).is($('#nwbhsLang'))){
                    var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
                    $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
                }else {
                    $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                }*/
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

});

