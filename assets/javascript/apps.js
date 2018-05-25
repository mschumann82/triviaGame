$(document).ready(function() {  
    var time = 30;
    var intervalID;
    var start = "Start";

    //$("#start").html("<span>Start</span>");
    $("#start").text(start);
    console.log(start);



    $("#start").on("click", function() {
        $("#start").html("<h2>:" + time + "</h2>");




      });





});