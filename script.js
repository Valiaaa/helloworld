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

/* 
    location.reload(function() {
        var answer;
    
        var responses = Array(15);
        responses[0] = "Ask again later...";
        responses[1] = "Yes";
        responses[2] = "No";
        responses[3] = "It appears to be so";
        responses[4] = "Reply is hazy, please try again";
        responses[5] = "Yes, definitely";
        responses[6] = "What is it you really want to know?";
        responses[7] = "Outlook is good";
        responses[8] = "My sources say no";
        responses[9] = "Signs point to yes";
        responses[10] = "Don't count on it";
        responses[11] = "Cannot predict now";
        responses[12] = "As I see it, yes";
        responses[13] = "Better not tell you now";
        responses[14] = "Concentrate and ask again";
    
        var RandNum = Math.floor(Math.random() * 4);
    
        var answer = responses[RandNum];
    
        $("#Response").html(answer);
      }); */

});