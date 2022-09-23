$(document).ready(function(){

    $("#soundword").click(function(){
        $("#crossed").hide();
        $("#sound").show();
    });

    $("#soundword").hover(function(){
        $("#crossed").toggle();
        $("#sound").toggle();
    });

    $("#whisperedcolor").hover(function(){
        $("#crossed").toggle();
        $("#whispered").toggle();
    });

    $("#vanitypic").hover(function(){
        $("#crossed").toggle();
        $("#vanity").toggle();
    });

    $("#goodbyedate").hover(function(){
        $("#crossed").toggle();
        $("#goodbye").toggle();
    });

    $("#particlestitle").hover(function(){
        $("#crossed").toggle();
        $("#particles").toggle();
    });



});