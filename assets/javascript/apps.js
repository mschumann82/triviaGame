$(document).ready(function() {  
    var time = 10;
    var intervalID;
    var start = "Start";
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;
    var gameRunning = false;
    var ten;

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
        if (gameRunning === true){
        run();
        pop();
        
       
        
        
        }



      });


    function pop() {
      

        $("#start").html("<h2>:" + time + "</h2>");
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>" + question1.ans1 + "</h2>");
        $("#answer2").html("<h2>" + question1.ans2 + "</h2>");
        $("#answer3").html("<h2>" + question1.ans3 + "</h2>");
        $("#answer4").html("<h2>" + question1.ans4 + "</h2>");

        $("#answer1").on("click", function() {
            gameRunning = false;
            clearInterval(intervalId);
            correct++;
            console.log(correct);
            rightOne();
            
            
          });
          $("#answer2").on("click", function() {
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
          $("#answer3").on("click", function() {
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
          $("#answer4").on("click", function() {
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });

          if (gameRunning === true) {
            ten = setTimeout(function tenSeconds() {
            gameRunning = false;
            clearInterval(intervalId);
            time = 10;
            unAnswered++;
            console.log(unAnswered);
            $("#question").html("<h2>" + question1.ques1 + "</h2>");
            $("#answer1").html("<h2>The correct answer is 2.</h2>");
            $("#answer2").html("<h2></h2>");
            $("#answer3").html("<h2></h2>");
            $("#answer4").html("<h2></h2>");

           }, 10000);
          }
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
  
        
      }

      /*function timeUpOne() {
        gameRunning = false;
        clearInterval(intervalId);
        time = 10;
        unAnswered++;
        console.log(unAnswered);
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>The correct answer is 2.</h2>");
        $("#answer2").html("<h2></h2>");
        $("#answer3").html("<h2></h2>");
        $("#answer4").html("<h2></h2>");
        ten = setTimeout(function tenSeconds() {
        
          
          
          
  
          
          
        }, 10000);
      
      }*/


      function stop() {

        clearInterval(intervalId);
      }

      

      function rightOne() {
        if (gameRunning === false) {
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>The correct answer is 2.</h2>");
        $("#answer2").html("<h2></h2>");
        $("#answer3").html("<h2></h2>");
        $("#answer4").html("<h2></h2>");
        ten = setTimeout(function tenSeconds() {
        
          alert("Ten Seconds!");
          //luck();
  
          
          
        }, 10000);
      }
      }

      function wrongOne() {
        if (gameRunning === false) {
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>The correct answer is 2.</h2>");
        $("#answer2").html("<h2></h2>");
        $("#answer3").html("<h2></h2>");
        $("#answer4").html("<h2></h2>");
        ten = setTimeout(function tenSeconds() {
        
          alert("Ten Seconds!");
          //luck();
  
          
          
        }, 10000);
        }

      }



    





});