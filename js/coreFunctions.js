/**
 * Created by Soichiro on 5/9/2016.
 */


$(window).on('load',function(){
    var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
    //$('#nwbhsFuncPane').css({'height': containerHeight});
    console.log('Loaded: Container Height - 40: '+containerHeight);
    console.log('Loaded: Column heights'+$('#column22Nwbhs').height()+'Loaded: Container heights'+$('#nwbhsPane').height());
});


$(document).ready(function(){

//Nav Bar -------------------------------------------------------------------------------
    // Responsive nav bar
    var visible = false;
    var $allSectionContainers = $('#banner').add($('#about')).add($('#projects')).add($('#otherSites'));

    if(window.innerWidth < 1000) {
        $("#sideNav").css({'transform': 'translateX(-200%)', 'box-shadow': 'none'});
        $allSectionContainers.css({'padding-left': '0'});
        if (!visible){
            $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
            $("#newName").remove();
            visible = true;
        }
    }

    $(window).resize(function(){
        if(window.innerWidth < 1000) {
            $("#sideNav").css({'transform': 'translateX(-200%)', 'box-shadow': 'none'});
            $allSectionContainers.css({'padding-left': '0'});
            if (!visible){
                $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
                $("#newName").remove();
                visible = true;
            }
        }else {
            $("#sideNav").css({'transform': 'translateX(0)'});
            $allSectionContainers.css({'padding-left': '200px'});
            $("#newNav").remove();
            if (visible){
                $("#bannerName").append("<h1 id='newName' class='mainFont'>Soichiro Hirata</h1>");
            }
            visible = false;
        }
        var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
        $('#nwbhsFuncPane').css({'height': containerHeight});
    });
//End Nav Bar -------------------------------------------------------------------------------

//Banner -------------------------------------------------------------------------------
    //Download Resume
    $("#downloadResume").on('click', function () {
        window.location = 'download/Resume-Hirata Soichiro.pdf';
    });
//End Banner -------------------------------------------------------------------------------

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
            $('#column22Nwbhs').css({'height': synopsisContainerHeight});
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
                }else{
                    $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                }
            console.log('SynopsisContainer: '+synopsisContainerHeight+'FuncContainer: '+currentLangHeight);
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
            $('html,body').animate({scrollTop: $('#nwbhsFuncPane').offset().top}, 'slow');
        }
    }
    function removeActiveMoveTopLang(){
        if ($('#nwbhsLang').hasClass('rotateForward')){
            $('.accordionButtonLangN').removeClass('activeButtonLangN');
            $('#nwbhsLang').removeClass('rotateForward');
        }
    }

    //Match container size
   /* var $window = $(window);
    $window.trigger('scroll');
    $window.on('scroll', function(){
        var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;
        console.log('Scroll at coreFunctions '+$('#nwbhsSynopsisPane').innerHeight());
        $('#nwbhsFuncPane').css({'height': containerHeight});
    });
*/
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


$(window).load(function () {

});
