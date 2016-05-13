/**
 * Created by Soichiro on 5/9/2016.
 */
$(document).ready(function(){

/*    $("li").hover(function(){
        $( "." ).animate({ "left": "+=50px" }, "slow" );
    });*/

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

    $("#downloadResume").click(function () {
        window.location = 'download/Resume-Hirata Soichiro.pdf';
    });
});