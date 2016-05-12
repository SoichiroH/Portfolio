/**
 * Created by Soichiro on 5/9/2016.
 */
$(document).ready(function(){

    if(window.innerWidth < 1000) {
        $("#sideNav").css('transform', 'translateX(-100%)');
    }
    $(window).resize(function(){
        if(window.innerWidth < 1000) {
            $("#sideNav").css('transform', 'translateX(-100%)');
        }else {
            $("#sideNav").css('transform', 'translateX(0)');
        }
    });

    $("#downloadResume").click(function () {
        window.location = 'download/Resume-Hirata Soichiro.pdf';
    });
});