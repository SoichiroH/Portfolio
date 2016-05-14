/**
 * Created by Soichiro on 5/9/2016.
 */
$(document).ready(function(){

    // Responsive nav bar
    var visible = false;

    if(window.innerWidth < 1000) {
        $("#sideNav").css('transform', 'translateX(-100%)');
        if (!visible){
            $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
            $("#newName").remove();
            visible = true;
        }
    }
    $(window).resize(function(){
        if(window.innerWidth < 1000) {
            $("#sideNav").css('transform', 'translateX(-100%)');
            if (!visible){
                $("#topNav").append("<nav id='newNav' class='nav'><div class='navContainer center'><a class='name'>Soichiro Hirata</a></div></nav>");
                $("#newName").remove();
                visible = true;
            }
        }else {
            $("#sideNav").css('transform', 'translateX(0)');
            $("#newNav").remove();
            if (visible){
                $("#bannerName").append("<h1 id='newName' class='center mainFont'>Soichiro Hirata</h1>");
            }

            visible = false;
        }
    });

    //Image sliders

    $(".imageSlider").each(function(){
        var $this = $(this);
        var $sliderContainer = $this.find(".slideContainer");
        var $eachSlides = $sliderContainer.find('.slide');
        var buttonArray = [];
        var currentIndex = 0;
        var timeOut;

        function move(newIndex){
            var animateLeft, slideLeft;

            advance();

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

        advance();

    });



    $("#downloadResume").click(function () {
        window.location = 'download/Resume-Hirata Soichiro.pdf';
    });
});