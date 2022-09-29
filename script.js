$(document).ready(function(){

    $("#x").click(function(){
        $("#crossed").show();
        $("#vanity, #sound, #whispered, #goodbye, #particles").hide();
        $("#x").hide();
        $("#poem").css('display', 'none');
    });

    $(".index1").click(function(){
        $("#crossed").hide();
        $("#sound, #whispered, #goodbye, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#vanity").show();
        $("#x").show();
    });

    $(".index2").click(function(){
        $("#crossed").hide();
        $("#vanity, #whispered, #goodbye, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#sound").show();
        $("#x").show();
    });

    $(".index3").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #goodbye, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#whispered").show();
        $("#x").show();
    });

    $(".index4").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #particles").hide();
        $("#poem").css('display', 'flex');
        $("#goodbye").show();
        $("#x").show();
    });

    $(".index5").click(function(){
        $("#crossed").hide();
        $("#vanity, #sound, #whispered, #goodbye").hide();
        $("#poem").css('display', 'flex');
        $("#particles").show();
        $("#x").show();
    });



    function rvanity() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/vanity.png' id='vanitypic'></center>";
        result[1] = "<div id='vanityword'>104 words</div>";
        result[2] = "<div id='vanitycolor'><svg><rect/></svg></div>";
        result[3] = "<div id='vanitydate'>June 20th, 2021</div>";
        result[4] = "<div id='vanitytitle'>In Vanity</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index1").html(output);
    };

    rvanity();

    function rsound() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/' id='soundpic'></center>";
        result[1] = "<div id='soundword'>153 words</div>";
        result[2] = "<div id='soundcolor'><svg><rect/></svg></div>";
        result[3] = "<div id='sounddate'>Oct 6th, 2019</div>";
        result[4] = "<div id='soundtitle'>A Little Sound</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index2").html(output);
    };

    rsound();

    function rwhispered() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/' id='whisperedpic'></center>";
        result[1] = "<div id='whisperedword'>144 words</div>";
        result[2] = "<div id='whisperedcolor'><svg><rect/></svg></div>";
        result[3] = "<div id='whispereddate'>Sep 22nd, 2019</div>";
        result[4] = "<div id='whisperedtitle'>Moonlight</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index3").html(output);
    };

    rwhispered();

    rsound();

    function rgoodbye() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/' id='goodbyepic'></center>";
        result[1] = "<div id='goodbyeword'>57 words</div>";
        result[2] = "<div id='goodbyecolor'><svg><rect/></svg></div>";
        result[3] = "<div id='goodbyedate'>Mar 21st, 2022</div>";
        result[4] = "<div id='goodbyetitle'>Goodbye</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index4").html(output);
    };

    rgoodbye();

    function rparticles() {
        var output;
        var result = Array(5);
        result[0] = "<center><img src='pic/' id='particlespic'></center>";
        result[1] = "<div id='particlesword'>47 words</div>";
        result[2] = "<div id='particlescolor'><svg><rect/></svg></div>";
        result[3] = "<div id='particlesdate'>Sep 18th, 2022</div>";
        result[4] = "<div id='particlestitle'>Particles</div>";

        var Num = Math.floor(Math.random() * 5);
        var output = result [Num];

        $(".index5").html(output);
    };

    rparticles();


});