$(document).ready(function() {  
    var time = 10;
    var intervalID;
    var start = "Start";
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;
    var gameRunning = false;

    var question1 = {
        ques1: "Whats 1 + 1?",
        ans1: 2,
        ans2: 4,
        ans3: 9,
        ans4: 0,
    };

    var question2 = {
        ques2: "Whats 2 + 2?",
        ans1: 2,
        ans2: 4,
        ans3: 9,
        ans4: 0,
    };

    var question3 = {
        ques1: "Whats 3 * 3?",
        ans1: 2,
        ans2: 4,
        ans3: 9,
        ans4: 0,
    };











    //$("#start").html("<span>Start</span>");
    $("#start").text(start);
    console.log(start);

    $("#start").on("click", function() {
        gameRunning = true;
        
        run();
        pop();
       
        console.log(unAnswered);
        




      });


    function pop() {
        $("#start").html("<h2>:" + time + "</h2>");
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>" + question1.ans1 + "</h2>");
        $("#answer2").html("<h2>" + question1.ans2 + "</h2>");
        $("#answer3").html("<h2>" + question1.ans3 + "</h2>");
        $("#answer4").html("<h2>" + question1.ans4 + "</h2>");

        $("#answer1").on("click", function() {
            clearInterval(intervalId);
            correct++;
            console.log(correct);
            
            
          });
          $("#answer2").on("click", function() {
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            
            
          });
          $("#answer3").on("click", function() {
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            
            
          });
          $("#answer4").on("click", function() {
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            
            
          });

    }

    function run() {
        if (gameRunning === true) {
        //clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        }
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

      function timeUp() {
        unAnswered++;
        gameRunning = false;
        clearInterval(intervalId);
        time = 10;
      }


      function stop() {

        clearInterval(intervalId);
      }



    





});