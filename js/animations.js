/**
 * Created by Soichiro on 5/8/2016.
 */

$(document).ready(function(){

    //Scroll to each section when sidebar a's are clicked
    function scrollToDiv(id){

        id = id.replace("link","");

        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }

    var sideNav = document.getElementsByName("sideNav");

    $("#sideNav li a").click(function (e) {
        e.preventDefault();
        scrollToDiv($(this).attr("id"));
    });


    $('#draggable').draggable({ containment: "parent" });
});

