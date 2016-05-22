/**
 * Created by Soichiro on 5/9/2016.
 */
$(document).ready(function(){

//Nav Bar -------------------------------------------------------------------------------
    // Responsive nav bar
    var visible = false;

    if(window.innerWidth < 1000) {
        $("#sideNav").css({'transform': 'translateX(-100%)', 'box-shadow': 'none'});
        if (!visible){
            $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
            $("#newName").remove();
            visible = true;
        }
    }
    $(window).resize(function(){
        if(window.innerWidth < 1000) {
            $("#sideNav").css({'transform': 'translateX(-100%)', 'box-shadow': 'none'});
            if (!visible){
                $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
                $("#newName").remove();
                visible = true;
            }
        }else {
            $("#sideNav").css({'transform': 'translateX(0)', 'box-shadow': '5px 8px 16px 0 rgba(166, 135, 80, 0.2),0 6px 20px 0 rgba(166, 135, 80, 0.19'});
            $("#newNav").remove();
            if (visible){
                $("#bannerName").append("<h1 id='newName' class='mainFont'>Soichiro Hirata</h1>");
            }
            visible = false;
        }
    });
//End Nav Bar -------------------------------------------------------------------------------

//Banner -------------------------------------------------------------------------------
    //Download Resume
    $("#downloadResume").on('click', function () {
        window.location = 'download/Resume-Hirata Soichiro.pdf';
    });
//End Banner -------------------------------------------------------------------------------

//Projects -------------------------------------------------------------------------------
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
    });

    //Languages Accordion
    $('.accordionButtonLangN').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('activeButtonLangN')){
            $('.accordionButtonLangN').removeClass('activeButtonLangN');
            $('.accordionPanelLangN').slideUp();
        } else {
            $('.accordionButtonLangN').removeClass('activeButtonLangN');
            $('.accordionPanelLangN').slideUp();
            $(this).next('.accordionPanelLangN').not(':animated').slideToggle();
            $(this).addClass('activeButtonLangN');
        }
    });


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