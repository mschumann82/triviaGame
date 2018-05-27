$(document).ready(function() {  
    var time = 10;
    var intervalID;
    var start = "Start";
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;
    var gameRunning = false;
    var gameRunningTwo = false;
    var gameRunningThree = false;
    var ten;
    

    var question1 = {
        ques1: "Whats 1 + 1?",
        ans1: 2,
        ans2: 4,
        ans3: 1,
        ans4: 0,
    };

    var question2 = {
        ques2: "Whats 2 + 2?",
        ans1: 2,
        ans2: 4,
        ans3: 1,
        ans4: 0,
    };

    var question3 = {
        ques3: "Whats 3 * 3?",
        ans1: 2,
        ans2: 4,
        ans3: 18,
        ans4: 9,
    };



//Question 1

    //$("#start").html("<span>Start</span>");
    $("#start").text(start);
    console.log(start);

    $("#start").on("click", function() {
       if (gameRunning === false && gameRunningTwo === false && gameRunningThree === false) {
        pop();
       }
       
      });


    function pop() {
        run();
        gameRunning = true;
        gameRunningTwo = false;
        gameRunningThree = false;
        
        

        $("#start").html("<h2>:" + time + "</h2>");
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>" + question1.ans1 + "</h2>");
        $("#answer2").html("<h2>" + question1.ans2 + "</h2>");
        $("#answer3").html("<h2>" + question1.ans3 + "</h2>");
        $("#answer4").html("<h2>" + question1.ans4 + "</h2>");

        if (correct === 0 && incorrect === 0) {

        $("#answer1").one("click", function() {
            
            gameRunning = false;
            clearInterval(intervalId);
            correct++;
            console.log(correct);
            rightOne();
            
            
          });
          $("#answer2").one("click", function() {
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
          $("#answer3").one("click", function() {
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
          $("#answer4").one("click", function() {
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
        } //end of if
          
      }

      

    function run() {
        
        //clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        
      }

    function decrement() {

        time--;
        console.log(time);
  
        $("#start").html("<h2>:" + time + "</h2>");

        if (time === 0 && gameRunning === true) { // question 1
          
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
            ten = setTimeout(function tenSeconds(){
              
              luck();
            }, 10000);
              
        }

        if (time === 0 && gameRunningTwo === true) { // question 2
          
          gameRunningTwo = false;
          clearInterval(intervalId);
          time = 10;
          unAnswered++;
          console.log(unAnswered);
          $("#question").html("<h2>" + question2.ques2 + "</h2>");
          $("#answer1").html("<h2>The correct answer is 4.</h2>");
          $("#answer2").html("<h2></h2>");
          $("#answer3").html("<h2></h2>");
          $("#answer4").html("<h2></h2>");
          ten = setTimeout(function tenSeconds(){
              
              sup();
            }, 10000);
             
      }

      if (time === 0 && gameRunningThree === true) {
        
        gameRunningThree = false;
        clearInterval(intervalId);
        time = 10;
        unAnswered++;
        console.log(unAnswered);
        $("#question").html("<h2>" + question3.ques3 + "</h2>");
        $("#answer1").html("<h2>The correct answer is 9.</h2>");
        $("#answer2").html("<h2></h2>");
        $("#answer3").html("<h2></h2>");
        $("#answer4").html("<h2></h2>");
          ten = setTimeout(function tenSeconds(){
            alert("time up");
            
          }, 10000);
            
      }

    } // end decrement function



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
          
          
          luck();
  
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
          
          luck();
  
        }, 10000);
        }
        
      }

//Question 2
    function luck() {
      clearInterval(intervalId);
      gameRunning = false;
      gameRunningTwo = true;
      gameRunningThree = false;
      time = 10;
      run();

      $("#start").html("<h2>:" + time + "</h2>");
      $("#question").html("<h2>" + question2.ques2 + "</h2>");
      $("#answer1").html("<h2>" + question2.ans1 + "</h2>");
      $("#answer2").html("<h2>" + question2.ans2 + "</h2>");
      $("#answer3").html("<h2>" + question2.ans3 + "</h2>");
      $("#answer4").html("<h2>" + question2.ans4 + "</h2>");

      if (correct === 1 || incorrect === 1 || unAnswered === 1) {

      $("#answer1").one("click", function() {
          gameRunningTwo = false;
          clearInterval(intervalId);
          incorrect++;
          console.log(incorrect);
          wrongTwo();
      
      
      });
      $("#answer2").one("click", function() {
          gameRunningTwo = false;
          clearInterval(intervalId);
          correct++;
          console.log(correct);
          rightTwo();
      
        });

      $("#answer3").one("click", function() {
          gameRunningTwo = false;
          clearInterval(intervalId);
          incorrect++;
          console.log(incorrect);
          wrongTwo();
      
      
        });

      $("#answer4").one("click", function() {
          gameRunningTwo = false;
          clearInterval(intervalId);
          incorrect++;
          console.log(incorrect);
          wrongTwo();
      
        });
      }// end of if
      
      }
    
function rightTwo() {
  if (gameRunningTwo === false) {
  $("#question").html("<h2>" + question2.ques2 + "</h2>");
  $("#answer1").html("<h2>The correct answer is 4.</h2>");
  $("#answer2").html("<h2></h2>");
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
  
    
    sup();
    
    
  }, 10000);
}

}

function wrongTwo() {
  if (gameRunningTwo === false) {
  $("#question").html("<h2>" + question2.ques2 + "</h2>");
  $("#answer1").html("<h2>The correct answer is 4.</h2>");
  $("#answer2").html("<h2></h2>");
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
    
    sup();
    

    
    
  }, 10000);
  }
  
}

//Question 3

function sup() {
    clearInterval(intervalId);
    gameRunning = false;
    gameRunningTwo = false;
    gameRunningThree = true;
    time = 10;
    run();

  $("#start").html("<h2>:" + time + "</h2>");
  $("#question").html("<h2>" + question3.ques3 + "</h2>");
  $("#answer1").html("<h2>" + question3.ans1 + "</h2>");
  $("#answer2").html("<h2>" + question3.ans2 + "</h2>");
  $("#answer3").html("<h2>" + question3.ans3 + "</h2>");
  $("#answer4").html("<h2>" + question3.ans4 + "</h2>");

  if (correct > 1 || incorrect > 1 || unAnswered > 1) {

  $("#answer1").one("click", function() {
      gameRunningThree = false;
      clearInterval(intervalId);
      incorrect++;
      console.log(incorrect);
      wrongThree();
      
      
    });
    $("#answer2").one("click", function() {
      gameRunningThree = false;
      clearInterval(intervalId);
      incorrect++;
      console.log(incorrect);
      wrongThree();
      
      
    });
    $("#answer3").one("click", function() {
      gameRunningThree = false;
      clearInterval(intervalId);
      incorrect++;
      console.log(incorrect);
      wrongThree();
      
      
    });
    $("#answer4").one("click", function() {
      gameRunningThree = false;
      clearInterval(intervalId);
      correct++;
      console.log(correct);
      rightThree();
      
      
    });
    
  }// end of if
    
}

function rightThree() {
  if (gameRunningThree === false) {
  $("#question").html("<h2>" + question3.ques3 + "</h2>");
  $("#answer1").html("<h2>The correct answer is 9.</h2>");
  $("#answer2").html("<h2></h2>");
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
  
    alert("time up");
    
  }, 10000);
}

}

function wrongThree() {
  if (gameRunningThree === false) {
  $("#question").html("<h2>" + question3.ques3 + "</h2>");
  $("#answer1").html("<h2>The correct answer is 9.</h2>");
  $("#answer2").html("<h2></h2>");
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
    
    alert("time up");
    
  }, 10000);
  }
  
}






});