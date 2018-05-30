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
        ques1: "Whats is the surname give to bastards in Dorne?",
        ans1: "Sand",
        ans2: "Stone",
        ans3: "Rivers",
        ans4: "Waters",
    };

    var question2 = {
        ques2: "Who was the Mad King's firstborn son?",
        ans1: "Aemon Targaryen",
        ans2: "Rhaegar Targaryen",
        ans3: "Aegon Targaryen",
        ans4: "Viserys Targaryen",
    };

    var question3 = {
        ques3: "In Which city does Arya Stark train to become a Faceless Man?",
        ans1: "Meereen",
        ans2: "Pentos",
        ans3: "Astapor",
        ans4: "Braavos",
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

        

        $("#answer1").on("click", function() {
            noClick();
            gameRunning = false;
            clearInterval(intervalId);
            correct++;
            console.log(correct);
            rightOne();
            
            
          });
          $("#answer2").on("click", function() {
            noClick();
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
          $("#answer3").on("click", function() {
            noClick();
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
          $("#answer4").on("click", function() {
            noClick();
            gameRunning = false;
            clearInterval(intervalId);
            incorrect++;
            console.log(incorrect);
            wrongOne();
            
            
          });
        
          
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
          $("#answer1").html("<h2>The correct answer is Sand.</h2>");
          $("#answer2").html('<img src = "assets/images/oberyn.jpg">');
          $("#answer3").html("<h2></h2>");
          $("#answer4").html("<h2></h2>");
            ten = setTimeout(function tenSeconds(){
              noClick();
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
          $("#answer1").html("<h2>The correct answer is Rhaegar Targaryen.</h2>");
          $("#answer2").html('<img src = "assets/images/question2.jpg">');
          $("#answer3").html("<h2></h2>");
          $("#answer4").html("<h2></h2>");
          ten = setTimeout(function tenSeconds(){
              noClick();
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
        $("#answer1").html("<h2>The correct answer is Braavos.</h2>");
        $("#answer2").html('<img src = "assets/images/arya.png">');
        $("#answer3").html("<h2></h2>");
        $("#answer4").html("<h2></h2>");
          ten = setTimeout(function tenSeconds(){
            noClick();
            results();
            
          }, 10000);
            
      }

    } // end decrement function



      function stop() {

        clearInterval(intervalId);
      }

      

      function rightOne() {
        if (gameRunning === false) {
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>The correct answer is Sand.</h2>");
        $("#answer2").html('<img src = "assets/images/oberyn.jpg">');
        $("#answer3").html("<h2></h2>");
        $("#answer4").html("<h2></h2>");
        ten = setTimeout(function tenSeconds() {
          
          noClick();
          luck();
  
        }, 10000);
      }
      
      }

      function wrongOne() {
        if (gameRunning === false) {
        $("#question").html("<h2>" + question1.ques1 + "</h2>");
        $("#answer1").html("<h2>The correct answer is Sand.</h2>");
        $("#answer2").html('<img src = "assets/images/oberyn.jpg">');
        $("#answer3").html("<h2></h2>");
        $("#answer4").html("<h2></h2>");
        ten = setTimeout(function tenSeconds() {
          noClick();
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

      

      $("#answer1").on("click", function() {
          noClick();
          gameRunningTwo = false;
          clearInterval(intervalId);
          incorrect++;
          console.log(incorrect);
          wrongTwo();
      
      
      });
      $("#answer2").on("click", function() {
        noClick();
          gameRunningTwo = false;
          clearInterval(intervalId);
          correct++;
          console.log(correct);
          rightTwo();
      
        });

      $("#answer3").on("click", function() {
        noClick();
          gameRunningTwo = false;
          clearInterval(intervalId);
          incorrect++;
          console.log(incorrect);
          wrongTwo();
      
      
        });

      $("#answer4").on("click", function() {
        noClick();
          gameRunningTwo = false;
          clearInterval(intervalId);
          incorrect++;
          console.log(incorrect);
          wrongTwo();
      
        });
      
      
      }
    
function rightTwo() {
  if (gameRunningTwo === false) {
  $("#question").html("<h2>" + question2.ques2 + "</h2>");
  $("#answer1").html("<h2>The correct answer is Rhaegar Targaryen.</h2>");
  $("#answer2").html('<img src = "assets/images/question2.jpg">');
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
    noClick();
    
    sup();
    
    
  }, 10000);
}

}

function wrongTwo() {
  if (gameRunningTwo === false) {
  $("#question").html("<h2>" + question2.ques2 + "</h2>");
  $("#answer1").html("<h2>The correct answer is Rhaegar Targaryen.</h2>");
  $("#answer2").html('<img src = "assets/images/question2.jpg">');
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
    noClick();
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

  

  $("#answer1").on("click", function() {
      noClick();
      gameRunningThree = false;
      clearInterval(intervalId);
      incorrect++;
      console.log(incorrect);
      wrongThree();
      
      
    });
    $("#answer2").on("click", function() {
      noClick();
      gameRunningThree = false;
      clearInterval(intervalId);
      incorrect++;
      console.log(incorrect);
      wrongThree();
      
      
    });
    $("#answer3").on("click", function() {
      noClick();
      gameRunningThree = false;
      clearInterval(intervalId);
      incorrect++;
      console.log(incorrect);
      wrongThree();
      
      
    });
    $("#answer4").on("click", function() {
      noClick();
      gameRunningThree = false;
      clearInterval(intervalId);
      correct++;
      console.log(correct);
      rightThree();
      
      
    });
    
  
    
}

function rightThree() {
  if (gameRunningThree === false) {
  $("#question").html("<h2>" + question3.ques3 + "</h2>");
  $("#answer1").html("<h2>The correct answer is Braavos.</h2>");
  $("#answer2").html('<img src = "assets/images/arya.png">');
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
    noClick();
    results();
    
  }, 10000);
}

}

function wrongThree() {
  if (gameRunningThree === false) {
  $("#question").html("<h2>" + question3.ques3 + "</h2>");
  $("#answer1").html("<h2>The correct answer is Braavos.</h2>");
  $("#answer2").html('<img src = "assets/images/arya.png">');
  $("#answer3").html("<h2></h2>");
  $("#answer4").html("<h2></h2>");
  ten = setTimeout(function tenSeconds() {
    noClick();
    results();
    
  }, 10000);
  }
  
}

function noClick() {
  $("#start").off("click");
  $("#answer1").off("click");
  $("#answer2").off("click");
  $("#answer3").off("click");
  $("#answer4").off("click");
}

function results() {
  $("#question").html("<h2></h2>");
  $("#answer1").html("<h2> Correct: " + correct + "</h2>");
  $("#answer2").html("<h2> Incorrect: " + incorrect + "</h2>");
  $("#answer3").html("<h2> Unanswered: " + unAnswered + "</h2>");
  $("#answer4").html("<h2>Reset</h2>");


  $("#answer4").on("click", function() {
     time = 10;
     intervalID;
     start = "Start";
     correct = 0;
     incorrect = 0;
     unAnswered = 0;
     gameRunning = false;
     gameRunningTwo = false;
     gameRunningThree = false;
     ten;
     pop();

    
    
  });


}






});