$(document).ready(function() {  
    var time = 30;
    var intervalID;
    var start = "Start";
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;
    var gameRunning = false;

    //$("#start").html("<span>Start</span>");
    $("#start").text(start);
    console.log(start);

    $("#start").on("click", function() {
        gameRunning = true;
        $("#start").html("<h2>:" + time + "</h2>");
        run();
        



      });

    function run() {
        //clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }

    function decrement() {

        time--;
        console.log(time);
  
        $("#start").html("<h2>:" + time + "</h2>");
  
        if (time === 0) {
  
          timeUp();
  
          alert("Time Up!");
        }
      }


      function stop() {

        clearInterval(intervalId);
      }



    





});