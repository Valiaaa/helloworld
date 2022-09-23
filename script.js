$(document).ready(function(){

    $("#x").click(function(){
        $("#crossed").show();
        $("#vanity, #sound, #whispered, #goodbye, #particles").hide();
        $("#x").hide();
    });

    $("#vanitypic").click(function(){
        $("#crossed").hide();
        $("#sound, #whispered, #goodbye, #particles").hide();
        $("#vanity").show();
        $("#x").show();
    });

    $("#soundword").click(function(){
        $("#crossed").hide();
        $("#vanity, #whispered, #goodbye, #particles").hide();
        $("#sound").show();
        $("#x").show();
    });

    $("#whisperedcolor").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #goodbye, #particles").hide();
        $("#whispered").show();
        $("#x").show();
    });

    $("#goodbyedate").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #particles").hide();
        $("#goodbye").show();
        $("#x").show();
    });

    $("#particlestitle").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #goodbye").hide();
        $("#particles").show();
        $("#x").show();
    });



});