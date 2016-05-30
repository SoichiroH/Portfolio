/**
 * Created by Soichiro on 5/9/2016.
 */

$(document).ready(function(){

//Nav Bar -------------------------------------------------------------------------------
    // Responsive nav bar
    var visible = false;
    var $allSectionContainers = $('#banner').add($('#about')).add($('#projects')).add($('#otherSites'));

    if(window.innerWidth < 1000) {
        var windowHeight = $(window).height();
        $('#banner').css({'height':windowHeight});
        $("#sideNav").css({'transform': 'translateX(-200%)', 'box-shadow': 'none'});
        $allSectionContainers.css({'padding-left': '0'});
        if (!visible){
            $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
            $("#newName").remove();
            visible = true;
        }
    }

    var scrolledAllTheWayDown = false;

    $(window).resize(function(){
        //Side Nav
        if(window.innerWidth < 1000) {
            var windowHeight = $(window).height();
            $('#banner').css({'height':windowHeight});
            $("#sideNav").css({'transform': 'translateX(-200%)', 'box-shadow': 'none'});
            $allSectionContainers.css({'padding-left': '0'});
            if (!visible){
                $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
                $("#newName").remove();
                visible = true;
            }
        }else {
            var windowHeight = $(window).height();
            $('#banner').css({'height':windowHeight});
            $("#sideNav").css({'transform': 'translateX(0)'});
            $allSectionContainers.css({'padding-left': '150px'});
            $("#newNav").remove();
            if (visible){
                $("#bannerName").append("<h1 id='newName' class='mainFont'>Soichiro Hirata</h1>");
            }
            visible = false;
        }

        //Project pane height
        var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
        $('#nwbhsFuncPane').css({'height': containerHeight});

        //Scrolling
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

    });//End Window Resize
//End Nav Bar -------------------------------------------------------------------------------

//Banner -------------------------------------------------------------------------------
    //Download Resume
    $("#downloadResume").on('click', function () {
        window.location = 'download/Resume-Hirata Soichiro.pdf';
    });
//End Banner -------------------------------------------------------------------------------

//About -------------------------------------------------------------------------------
    //Languages Accordion
    $('.accordionButtonLangA').on('click', function (e) {
        var container2Height = $('#whyPane').innerHeight()-40;
        var currentLangHeight = $('#column22Nwbhs').innerHeight();

        e.preventDefault();
        if ($(this).hasClass('activeButtonLangA')){
            $('.accordionButtonLangA').removeClass('activeButtonLangA');
            $('.accordionPanelLangA').slideUp();
            //if rotateForward, height of the box is ''
            if ($('#aboutLangA').hasClass('rotateForward')){
                $('.column3-3').add($('#aboutLangA')).css({'height': ''});
            }else {
                $('.column3-3').css({'height': container2Height});
            }
        } else {
            $('.accordionButtonLangA').removeClass('activeButtonLangA');
            $('.accordionPanelLangA').slideUp();

            $(this).next('.accordionPanelLangA').not(':animated').slideToggle('fast');
            $(this).addClass('activeButtonLangA');
            $('.column3-3').add($('#langAboutPane')).css({'height': ''});
        }
    });

    //About pane height
    $(window).resize(function(){

        var column1Height = $('.column1-3').outerHeight();
        var column2Height =  $('.column2-3').outerHeight();
        var container1Height = $('#profilePane').innerHeight()-40;
        var container2Height = $('#whyPane').innerHeight()-40;

           console.log('column1 '+column1Height+' container1 '+container1Height+
         'column2 '+column2Height+' container2 '+container2Height);

        if (window.innerWidth < 1000){
            $('#profilePane').add($('#whyPane')).add($('#langAboutPane')).css({
                'height': ''
            });
        }else {
            $('#whyPane').css({
                'height': ''/*,
                 'min-height': container1Height*/
            });
            $('#profilePane').add($('#langAboutPane')).css({
                'height': container2Height
            });
        }
    });

//Projects -------------------------------------------------------------------------------
    //Open All Button
    var $openAllButton = $('#nwbhsFunc').add($('#nwbhsLang'));
    //Description Accordion
    $('.accordionButton').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('activeButton')){
            $('.accordionButton').removeClass('activeButton');
            $('.accordionPanel').slideUp();
        } else {
            $('.accordionButton').removeClass('activeButton');
            $('.accordionPanel').slideUp();
            $(this).next('.accordionPanel').not(':animated').slideToggle();
            $(this).addClass('activeButton');
        }
        removeActiveMoveTopFunc();
    });

    //Languages Accordion
    $('.accordionButtonLangN').on('click', function (e) {
        var synopsisContainerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
        var currentLangHeight = $('#column22Nwbhs').innerHeight();

        e.preventDefault();
        if ($(this).hasClass('activeButtonLangN')){
            $('.accordionButtonLangN').removeClass('activeButtonLangN');
            $('.accordionPanelLangN').slideUp();
            //if rotateForward, height of the box is ''
            if ($('#nwbhsFunc').hasClass('rotateForward')){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
            }else {
                $('#column22Nwbhs').css({'height': synopsisContainerHeight});
            }
        } else {
            $('.accordionButtonLangN').removeClass('activeButtonLangN');
            $('.accordionPanelLangN').slideUp();
                if ($(this).is($('#backendNwbhs'))){
                    //backEnd pane went over when the screen width was below 1300
                    if ($(window).innerWidth() < 1300){
                        $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                    } else{
                        $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': synopsisContainerHeight});
                    }
                    //if rotateForward, height of the box is ''
                    if ($('#nwbhsFunc').hasClass('rotateForward')){
                        $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                    }else {
                        $('#column22Nwbhs').css({'height': synopsisContainerHeight});
                    }
                }else{
                    $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                }
            $(this).next('.accordionPanelLangN').not(':animated').slideToggle('fast');
            $(this).addClass('activeButtonLangN');
        }
        removeActiveMoveTopLang();
    });

    //Accordion bug fix - active button/viewport stays
    function removeActiveMoveTopFunc(){
        if ($('#nwbhsFunc').hasClass('rotateForward')){
            $('.accordionButton').removeClass('activeButton');
            $('#nwbhsFunc').removeClass('rotateForward');
            $('html,body').animate({scrollTop: $('#nwbhsFuncPane').offset().top}, 'fast');
            console.log('clicked');
        }
    }
    function removeActiveMoveTopLang(){
        if ($('#nwbhsLang').hasClass('rotateForward')){
            $('.accordionButtonLangN').removeClass('activeButtonLangN');
            $('#nwbhsLang').removeClass('rotateForward');
        }
    }

    //Image sliders
    $("#playSlide").hide();

    $(".imageSlider").each(function(){
        var $this = $(this);
        var $sliderContainer = $this.find(".slideContainer");
        var $eachSlides = $sliderContainer.find('.slide');
        var buttonArray = [];
        var currentIndex = 0;
        var timeOut;
        var timeOutCleared = false;

        function move(newIndex){
            var animateLeft, slideLeft;

            if (timeOutCleared == false){
                advance();
            }

            if ($sliderContainer.is(':animated') || currentIndex === newIndex){
                return;
            }

            buttonArray[currentIndex].removeClass('active');
            buttonArray[newIndex].addClass('active');

            if (newIndex > currentIndex){
                slideLeft = '100%';
                animateLeft = '-100%';
            } else {
                slideLeft = '-100%';
                animateLeft = '100%';
            }

            $eachSlides.eq(newIndex).css({left: slideLeft, display: 'block'});
            $sliderContainer.animate({left: animateLeft}, function(){
                $eachSlides.eq(currentIndex).css({display: 'none'});
                $eachSlides.eq(newIndex).css({left: 0});
                $sliderContainer.css({left: 0});
                currentIndex = newIndex;
            });
        }

        function advance() {
            clearTimeout(timeOut);
            timeOut = setTimeout(function(){
                if (currentIndex < ($eachSlides.length - 1)){
                    move(currentIndex + 1);
                } else {
                    move(0);
                }
            }, 4000);
        }

        $.each($eachSlides, function (index) {
            var $button = $('<button type="button" class="slide-btn"></button>');
            if (index === currentIndex) {
                $button.addClass('active');
            }
            $button.on('click', function(){
                move(index);

            }).appendTo('.slideButtons');
            buttonArray.push($button);
        });

        if(timeOutCleared == false) {
            advance();
        }

        $("#pauseSlide").on('click', function(){
            clearTimeout(timeOut);
            timeOutCleared = true;
            $(this).hide('slow');
            $("#playSlide").show('slow');
        });

        $("#playSlide").on('click', function(){
            timeOutCleared = false;
            move(currentIndex + 1);
            advance();
            $(this).hide('slow');
            $("#pauseSlide").show('slow');
        });
    });

    //Slider container height

    //Initial
    if(window.innerWidth < 1550 && window.innerWidth > 1450){
        $('.sliderHeight').css({
            'height': '460px'
        });
    } else if(window.innerWidth <= 1450 && window.innerWidth > 1350){
        $('.sliderHeight').css({
            'height': '420px'
        });
    } else if((window.innerWidth <= 1350 && window.innerWidth > 1250) ||
        (window.innerWidth <= 1000 && window.innerWidth > 900)){
        $('.sliderHeight').css({
            'height': '400px'
        });
    } else if((window.innerWidth <= 1250 && window.innerWidth > 1150) ||
           (window.innerWidth <= 900 && window.innerWidth > 800)){
        $('.sliderHeight').css({
            'height': '370px'
        });
    } else if((window.innerWidth <= 1150 && window.innerWidth > 1000) ||
              (window.innerWidth <= 800 && window.innerWidth > 700)){
        $('.sliderHeight').css({
            'height': '320px'
        });
    } else if(window.innerWidth <= 700 && window.innerWidth > 600) {
        $('.sliderHeight').css({
            'height': '270px'
        });
    } else if(window.innerWidth <= 600){
        $('.sliderHeight').css({
            'height': '240px'
        });
    } else {
        $('.sliderHeight').css({
            'height': '550px'
        });
    }

    //Resize
    $(window).resize(function(){
        if(window.innerWidth < 1550 && window.innerWidth > 1450){
            $('.sliderHeight').css({
                'height': '460px'
            });
        } else if(window.innerWidth <= 1450 && window.innerWidth > 1350){
            $('.sliderHeight').css({
                'height': '420px'
            });
        } else if((window.innerWidth <= 1350 && window.innerWidth > 1250) ||
                  (window.innerWidth <= 1000 && window.innerWidth > 900)){
            $('.sliderHeight').css({
                'height': '400px'
            });
        } else if((window.innerWidth <= 1250 && window.innerWidth > 1150) ||
                  (window.innerWidth <= 900 && window.innerWidth > 800)){
            $('.sliderHeight').css({
                'height': '370px'
            });
        } else if((window.innerWidth <= 1150 && window.innerWidth > 1000) ||
                  (window.innerWidth <= 800 && window.innerWidth > 700)){
            $('.sliderHeight').css({
                'height': '320px'
            });
        } else if(window.innerWidth <= 700 && window.innerWidth > 600) {
            $('.sliderHeight').css({
                'height': '270px'
            });
        }  else if(window.innerWidth <= 600){
            $('.sliderHeight').css({
                'height': '240px'
            });
        } else {
            $('.sliderHeight').css({
                'height': '550px'
            });
        }
    });
//End Projects -------------------------------------------------------------------------------

});
