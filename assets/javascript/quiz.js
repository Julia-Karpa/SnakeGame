/* Multiple Choice Questions */

/* define questions and possible answers (nb: correct answer is 1st in the array) */
questions = [
    ["Snakes are cold blooded and must regulate their body temperature externally. True or false?", ["False", "True", "", ""], 1] ,
    ["About once a month snakes shed their skin. What is this shedding process called?", ["Metamorphosis", "Mitosis", "Ecdysis"], 2],
    ["Which of the following countries has no wild and native snakes?", ["United Kingdom", "Greenland", "Germany", "Australia"], 1],
    ["Do all snakes lay eggs?", ["No", "Yes"], 0],
    ["What are the three species of snake native to the UK?", ["Grass Snake, Adder and Cobra", "Grass Snake, Adder and Anaconda", "Grass Snake, Adder and Smooth Snake"], 2],
    ["Which famous character from Greek Mythology had snakes in place of hair?", ["Aphrodite", "Hercules", "Athena", "Medusa"], 3],
    ["Are all snakes venomous?",["No", "Yes"], 0],
    ["What is the fear of snakes known as?", ["Ichthyophobia", "Snakeophobia", "Ophidiophobia"], 2],
    ["Most snakes live on land, however, sea snakes also exist. About how many species of snakes live in the Indian and Pacific Oceans?", ["20", "10", "200", "70"], 3],
  ];
  
  /* initialise global variables */
  var correctAnswer = "";
  var randInt = 0;
  var score = 0;
  var attempts = 6;
  

  function startNewGame(){
    score = 0;
   attempts = 6;
   resetScreen();
   displayQuestion();
 }

  function resetScreen() {
    /* reset scores and lives left */
    score = 0;
    attempts = 6;
  
    /* Clear previous choices shown on screen */
    document.getElementById("question").innerHTML = "";
    document.getElementById("choice0").innerHTML = "";
    document.getElementById("choice1").innerHTML = "";
    document.getElementById("choice2").innerHTML = "";
    document.getElementById("choice3").innerHTML = "";
  
    /* Display scores and lives on screen  */
    document.getElementById("score").innerHTML = score;
    document.getElementById("try").innerHTML = attempts;
  }
  




  function displayQuestion() {

    /* Function to randomly pick a question for display */
  
  
  

  

    /* Get a random number and use it to pick a question */
    randInt = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerHTML = questions[randInt][0];
  
    /* Save the correct answer (later, we'll suffle the options) */
    correctAnswer = questions[randInt][2];
  
  
    /* Display the 1st and 2nd choices */
    document.getElementById("choice0").innerHTML = questions[randInt][1][0];
    document.getElementById("choice1").innerHTML = questions[randInt][1][1];
  
    /* Check 3rd choice exists and display it */
    if (typeof questions[randInt][1][2] !== "undefined") {
      document.getElementById("choice2").innerHTML = questions[randInt][1][2];
    }
  
    /* Check 4th choice exists and display it */
    if (typeof questions[randInt][1][3] !== "undefined") {
      document.getElementById("choice3").innerHTML = questions[randInt][1][3];
    }
  }
  




  function checkAnswer(element, userAnswer) {
    /* Check the user's answer against the correct answer */
 
    console.log("userAnswer", userAnswer)
console.log(questions[randInt][1][userAnswer])
 
    /* If correct, then increment the user's score */
  /*   if (questions[randInt][1][userAnswer] == correctAnswer) {
      score++;
    } */
 
  if (userAnswer = correctAnswer)
   {score++
  }
 
    /* Update the score to display on screen */
    document.getElementById("score").innerHTML = score;
 
    /* Reduce the number of attempts left */
    attempts--;
    document.getElementById("try").innerHTML = attempts;
 
    /* If 3 correct questions have been answered, allow the game */
    if (score >= 3) {
      resetScreen();
      window.open("game.html");
    }
 
    /* If no more attempts left ... */
    if (attempts <= 0) {
      resetScreen();
      window.alert("GAME OVER ! Sorry.. try again ");
    } else displayQuestion();
  }


  /* --- Main Program starts when user clicks START button  ---------------*/
  resetScreen();
  displayQuestion()
