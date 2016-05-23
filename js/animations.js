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
            $(this).removeClass('comingDown').addClass('comingUp');
        },mouseleave: function(){
            $(this).addClass('comingDown').removeClass('comingUp');
        }
    });


//SideNav
    //Scroll to each section when sidebar a's are clicked
    function scrollToDiv(id){
        id = id.replace("link","");

        $('html,body').animate({scrollTop: $("#"+id).offset().top}, 'slow');
    }

    $("#sideNav li a").click(function (e) {
        e.preventDefault();
        scrollToDiv($(this).attr("id"));
    });


//About

//Projects

    /*$('.descriptionBackground').on({mouseenter: function(){
            //$(this).removeClass('comingDown');
            $(this).addClass('runningBorderLeftToRight');
        },mouseleave: function(){
            //$(this).addClass('comingDown');
            //$(this).removeClass('runningBorder');
        }
    });*/


    console.log('Initial Height: '+$('#nwbhsSynopsisPane').innerHeight());



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
           // console.log('Scroll at animations '+$('#nwbhsSynopsisPane').innerHeight());
            var containerHeight = $('#nwbhsSynopsisPane').innerHeight()-40;

             console.log('Rotate Back:'+$openAllButton.hasClass('rotateBack')+'  Rotate Forward: '+$openAllButton.hasClass('rotateForward'));

            if ($openAllButton.hasClass('rotateBack')) {
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
                console.log('has class rotateBack');
            }
            if ($openAllButton.hasClass('rotateForward')){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                console.log('has class rotateForward');
            }
            if ($openAllButton.hasClass('rotateForward') && $openAllButton.hasClass('rotateBack')) {
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': ''});
                console.log('has class rotateForward and Back');
                //console.log('Scroll at animations inside else '+$('#nwbhsSynopsisPane').innerHeight());
            }
            if ($openAllButton.hasClass('rotateForward' || 'rotateBack') == false){
                $('#column22Nwbhs').add($('#nwbhsFuncPane')).css({'height': containerHeight});
                console.log('has class rotateForward or Back is false');
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
                console.log('If this has rotateBack: '+ containerHeight);
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

