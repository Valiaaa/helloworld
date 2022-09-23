$(document).ready(function(){

    $("#x").click(function(){
        $("#crossed").show();
        $("#vanity, #sound, #whispered, #goodbye, #particles").hide();
        $("#x").hide();
        $("#poem").css('display', 'none');
    });

    $("#vanitypic").click(function(){
        $("#crossed").hide();
        $("#sound, #whispered, #goodbye, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#vanity").show();
        $("#x").show();
    });

    $("#soundword").click(function(){
        $("#crossed").hide();
        $("#vanity, #whispered, #goodbye, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#sound").show();
        $("#x").show();
    });

    $("#whisperedcolor").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #goodbye, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#whispered").show();
        $("#x").show();
    });

    $("#goodbyedate").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#goodbye").show();
        $("#x").show();
    });

    $("#particlestitle").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #goodbye").hide();
        $("#poem").css('display', 'flex');
        $("#particles").show();
        $("#x").show();
    });



});