


//THIS HOUSES ALL OF THE QUIZ QUESTIONS AND ANSWERS INSIDE OF OBJECT ARRAYS
var quizContent = {
  questionArray: ["HTML stands for _________", "HTML is a subset of ______", "ALL HTML tags are enclosed in what?", "To create HTML page, you need _____", "<a> and </a> are the tags used for ______", "The CSS property used to control the element's font-size is -", "The HTML attribute used to define the internal stylesheet is -", "Which of the following CSS property is used to set the background image of an element?", "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?", ") Which of the following is the correct syntax to display the hyperlinks without any underline?", ") Which of the following variables takes precedence over the others if the names are the same?", ") Which one of the following is the correct way for calling the JavaScript code?", ") Which of the following type of a variable is volatile?", ") Which of the following option is used as hexadecimal literal beginning?", ") When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.", ") In the JavaScript, which one of the following is not considered as an error:", "Who developed jQuery, and in which year it was first released?", "jQuery is a -", "Which of the following sign is used as a shortcut for jQuery?", "$(this) in jQuery is used when -", "Which of the following jQuery method is used to hide the selected elements?", "Which jQuery method is used to set one or more style properties to the selected element?", "Which of the following jQuery method can be used to deal with the name conflicts?", "The correct syntax to set the background color of all h1 elements to yellow in jQuery -", "Which of the following jQuery method is used to attach a handler to an event?", ") The jQuery method used to perform an asynchronous HTTP request -"],
  options: {
    positionA: ["Hyper Text Markup Language", "SGMD", "# and #", "Web browser", "Adding image", "text-style", "<style>", "background-attachment", "p {background-color : yellow;}", "a {text-decoration : underline;}", "Global variable", "Preprocessor", "Mutable variable", "00", "Prints an exception error", "Syntax error", "John Richard in 2001", "JavaScript method", "the % sign", "an HTML element references the entire document", "The hidden() method", "The html() method", "The conflict() method", "$(\"h1\").style(\"background-color\",\"yellow\");", "unbind() method", "jQuery ajaxSetup() method"],
    positionB: ["Holistick Technical Method Library", "SGML", "? and !", "text editor", "Aligning text", "text-size", "style", "background-image", "p {background-color : #yellow;}", "a {decoration : no-underline;}", "The local element", "Triggering Event", "Dynamic variable", "0x", "Prints an overflow error", "Missing of semicolons", "Mark Bensman in 2004", "JavaScript library", "the & sign", "an HTML element references its own action", "The hide() method", "The style() method", "The nameConflict() method", "$(\"h1\").html(\"background-color\",\"yellow\");", "attach() method", "jQuery ajaxSync() method"],
    positionC: ["Hyper Tax Makes Line", "SGMH", "< and >", "Both [A] and [B]", "Audio-voiced text", "font-size", "<link>", "background-color", "all {background-color : yellow;}", "a {text-decoration : none;}", "The two of the above", "RMI", "Volatile variable", "0X", "Displays \"Infinity\"", "Division by zero", "John Resig in 2006", "JSON library", "the $ sign", "an HTML element references the action of its parent element", "The visible(false) method", "The css() method", "The css() method", "$(\"h1\").css(\"background-color\",\"yellow\");", "bind() method", "jQuery ajax() method"],
    positionD: ["None of the above", "None of the above", "{ and }", "None of the above", "Adding links to your page", "None of the above", "<script>", "None of the above", "all p {background-color : #yellow;}", "None of the above", "None of the above", "Function/Method", "Immutable variable", "Both 0x and 0X", "Prints the value as such", "Missing of Bracket", "None of the above", "PHP method", "the @ sign", "All of the above", "The display(none) method", "All of the above", "None of the above", "$(\"h1\").layout(\"background-color\",\"yellow\");", "None of the above", "None of the above"],
  },
  correctAnswer: ["Hyper Text Markup Language", "SGML", "< and >", "Both [A] and [B]", "Adding links to your page", "font-size", "<style>", "background-image", "p {background-color : yellow;}", "a {text-decoration : none;}", "The local element", "Function/Method", "Mutable variable", "Both 0x and 0X", "Displays \"Infinity\"", "Missing of Bracket", "John Resig in 2006", "JavaScript library", "the $ sign", "an HTML element references its own action", "The hide() method", "The css() method", "The css() method", "$(\"h1\").css(\"background-color\",\"yellow\");", "bind() method", "jQuery ajax() method"]
}

//OBJECT FOR WRITING TO THE PAGE
var htmlObjects = {
  beginButton: document.querySelector("#begin-quiz"),
  allButtons: document.querySelectorAll("button"),
  quizTitle: document.querySelector("#quiz-title"),
  timeLeft: document.querySelector(".time"),
  question: document.querySelector("#question"),
  options: {
    container: document.querySelector(".options-container"),
    positionA: document.querySelector(".options-container").children[0].children[1],
    positionB: document.querySelector(".options-container").children[1].children[1],
    positionC: document.querySelector(".options-container").children[2].children[1],
    positionD: document.querySelector(".options-container").children[3].children[1],
    positionE: document.querySelector(".options-container").children[4].children[1]
  },
  correctAnswer: document.querySelector("#correct-answer"),
  scores: {
    scorerNamesContainer: document.querySelector("#score-names").children[0],
    correctAnswerContainer: document.querySelector("#score-corrects").children[0],
    incorrectAnswerContainer: document.querySelector("#score-incorrects").children[0]
  },
  correctTally: document.querySelector("#tally-container").children[1],
  incorrectTally: document.querySelector("#tally-container").children[3]
}

//GOBALLY SCOPING THESE
htmlObjects.quizTitle.textContent = "How many can you answer?";
var userName;
var timerInterval;
var correct = 0;
var incorrect = 0;
var secondsLeft = 301;
var minutesLeft;
var secondsRemainder;
var questionIterationValue = "First";
var quizStatus = "Inactive"
var questionCount = 1;
var index;
var hasntChosenYet = false;
var storedScorerName = [];
var storedNumberCorrect = [];
var storedNumberIncorrect = [];
var scorerName = [];
var numberCorrect = [];
var numberIncorrect = [];


const forceArray = (v) => [].concat(v).map(name => name);

//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE FUNCTIONS BELOW


function getRandomQuestion() {
  index = Math.floor(Math.random() * quizContent.questionArray.length);
}

function writeCurrentQuestion() {
  htmlObjects.question.textContent = quizContent.questionArray.at(index);
  htmlObjects.options.positionA.textContent = quizContent.options.positionA.at(index);
  htmlObjects.options.positionB.textContent = quizContent.options.positionB.at(index);
  htmlObjects.options.positionC.textContent = quizContent.options.positionC.at(index);
  htmlObjects.options.positionD.textContent = quizContent.options.positionD.at(index);
}

function displayScoreHistory() {
  storedScorerName = forceArray(JSON.parse(localStorage.getItem("scorerName")));
  storedNumberCorrect = forceArray(JSON.parse(localStorage.getItem("numberCorrect")));
  storedNumberIncorrect = forceArray(JSON.parse(localStorage.getItem("numberIncorrect")));
  if (storedScorerName.length > 0) {
    for (var i = 0; i < storedScorerName.length; i++) {
      var liName = document.createElement("li");
      liName.textContent = storedScorerName.at(i);
      htmlObjects.scores.scorerNamesContainer.appendChild(liName);
      var liCorrect = document.createElement("li");
      liCorrect.textContent = storedNumberCorrect.at(i);
      htmlObjects.scores.correctAnswerContainer.appendChild(liCorrect);
      var liIncorrect = document.createElement("li");
      liIncorrect.textContent = storedNumberIncorrect.at(i);
      htmlObjects.scores.incorrectAnswerContainer.appendChild(liIncorrect);
    }
  }
}

function promptSaveScore() {
  userName = prompt("You scored:\n" + correct + " correct answers\n" + (quizContent.questionArray.length - correct) + " incorrect answers\nFor a grade of: " + ((correct / quizContent.questionArray.length) * 100) + "%!\n\nIf you wish to save your score, enter your name!");
  if (userName) {
    storedScorerName = forceArray(JSON.parse(localStorage.getItem("scorerName")));
    storedNumberCorrect = forceArray(JSON.parse(localStorage.getItem("numberCorrect")));
    storedNumberIncorrect = forceArray(JSON.parse(localStorage.getItem("numberIncorrect")));
    if (storedScorerName !== null && storedNumberCorrect !== null && storedNumberIncorrect !== null) {
      if (storedScorerName.length > 0) {
        storedScorerName.push(userName);
        storedNumberCorrect.push(correct);
        storedNumberIncorrect.push(incorrect);
        scorerName = storedScorerName;
        numberCorrect = storedNumberCorrect;
        numberIncorrect = storedNumberIncorrect;
        localStorage.setItem("scorerName", JSON.stringify(scorerName));
        localStorage.setItem("numberCorrect", JSON.stringify(numberCorrect));
        localStorage.setItem("numberIncorrect", JSON.stringify(numberIncorrect));
      } else {
        scorerName = forceArray(userName);
        numberCorrect = forceArray(correct);
        numberIncorrect = forceArray(incorrect);
        localStorage.setItem("scorerName", JSON.stringify(scorerName));
        localStorage.setItem("numberCorrect", JSON.stringify(numberCorrect));
        localStorage.setItem("numberIncorrect", JSON.stringify(numberIncorrect));
      }
    } else {
      scorerName = forceArray(userName);
      numberCorrect = forceArray(correct);
      numberIncorrect = forceArray(incorrect);
      localStorage.setItem("scorerName", JSON.stringify(scorerName));
      localStorage.setItem("numberCorrect", JSON.stringify(numberCorrect));
      localStorage.setItem("numberIncorrect", JSON.stringify(numberIncorrect));
    }
  }
  htmlObjects.correctTally.textContent = 0;
  htmlObjects.incorrectTally.textContent = 0;
}

function setTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft === 30 || secondsLeft === 60) {
    document.querySelector('#time-running-out').play();
    }
    minutesLeft = Math.floor(secondsLeft / 60);
    secondsRemainder = (secondsLeft - (minutesLeft * 60));
    htmlObjects.timeLeft.textContent = " -- " + minutesLeft + " mins " + secondsRemainder + " seconds left to guess! --";
    if (secondsLeft === 0) {
      document.querySelector('#gameover').play();
      clearInterval(timerInterval);
      incorrect++;
      htmlObjects.timeLeft.textContent = "Out of time...";
      alert("Oh no! You've run out of time!\n\nAt the time of failure you scored:\n" + correct + " correct answers\n" + (quizContent.questionArray.length - correct) + " incorrect answers\nFor a grade of: " + ((correct / quizContent.questionArray.length)*100) + "%!\n\nTry again!");
    }
  }, 1000);
}

function resetButtonColors() {
  for (var i = 0; i < htmlObjects.allButtons.length; i++) {
    htmlObjects.allButtons[i].removeAttribute('style');
  }
}

function primaryIterationControl() {
  htmlObjects.correctAnswer.textContent = "";
  //TAKE INITIAL ACTION
  if (quizStatus === "Inactive") {
    var correct = 0;
    var incorrect = 0;
    var secondsLeft = 301;
    hasntChosenYet = false;
    setTimer();
    getRandomQuestion();
    htmlObjects.quizTitle.textContent = "How many can you answer?"
    //SET NEXT ITERATIVE CONDITIONS
    quizStatus = "Active";
  }
  //TEST CONDITION #1--------------------------------------------------
  if (questionIterationValue === "First" && quizStatus === "Active") {
    //TAKE ACTION
    if (hasntChosenYet === false) {
      resetButtonColors();
      writeCurrentQuestion();
      console.log(quizContent.correctAnswer.at(index));
      //SET NEXT ITERATIVE CONDITIONS
      questionIterationValue = "Iterating";
      htmlObjects.beginButton.textContent = "Next";
      if (index === (quizContent.questionArray.length - 1)) {
        index = 0;
      } else {
        index++;
      }
      questionCount++;
      hasntChosenYet = true;
    }
    //TESTCONDITION  #2-------------------------------------------------
  } else if (questionIterationValue === "Iterating" && quizStatus === "Active") {
    //TAKE ACTION
    if (hasntChosenYet === false) {
      resetButtonColors();
      writeCurrentQuestion();
      console.log(quizContent.correctAnswer.at(index));
      //SET NEXT ITERATIVE CONDITIONS
      if (index === (quizContent.questionArray.length - 1)) {
        index = 0;
      } else {
        index++;
      }
      if (questionCount === 9) {
        questionIterationValue = "Last";
        htmlObjects.beginButton.textContent = "Finish";
      }
      questionCount++;
      hasntChosenYet = true;
    }
      //TEST CONDITION #3--------------------------------------------------
    } else if (questionIterationValue === "Last" && quizStatus === "Active") {
      //TAKE ACTION
      if (hasntChosenYet === false) {
        resetButtonColors();
        writeCurrentQuestion();
        console.log(quizContent.correctAnswer.at(index));
        //SET NEXT ITERATIVE CONDITIONS
        if (index === (quizContent.questionArray.length - 1)) {
          index = 0;
        } else {
          index++;
        }
        questionIterationValue = "High Scores";
        htmlObjects.beginButton.textContent = "Show Score";
        hasntChosenYet = true;
      }
      //TEST CONDITION #4--------------------------------------------------
    } else if (questionIterationValue === "High Scores" && quizStatus === "Active") {
      //TAKE ACTION
      document.querySelector('#finished').play();
      resetButtonColors();
      htmlObjects.quizTitle.textContent = "High Scores"
      htmlObjects.question.textContent = "";
      htmlObjects.options.positionA.textContent = "";
      htmlObjects.options.positionB.textContent = "";
      htmlObjects.options.positionC.textContent = "";
      htmlObjects.options.positionD.textContent = "";
      htmlObjects.correctAnswer.textContent = "";
      clearInterval(timerInterval);
      promptSaveScore();
      displayScoreHistory();
      //SET NEXT ITERATIVE CONDITIONS
      questionIterationValue = "Reset";
      htmlObjects.beginButton.textContent = "Reset Quiz";
      quizStatus = "Inactive";
      hasntChosenYet = true;
    //TEST CONDITION #5--------------------------------------------------
  } else if (questionIterationValue === "Reset" && quizStatus === "Active") {
    //TAKE ACTION
    window.location.reload(true);
    htmlObjects.quizTitle.textContent = "How many can you answer?"
    correct = 0;
    incorrect = 0;
    secondsLeft = 301;
    questionIterationValue = "First";
    quizStatus = "Inactive"
    questionCount = 0;
  }
}


//DEFINE FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW





//EVENT TO HANDLE CHANGES DURING ITERATION OF QUESTIONS UPON ACTION OF THE NEXT BUTTON
htmlObjects.beginButton.addEventListener("click", function (event) {
  primaryIterationControl();
}
);


//EVENT TO HANDLE THE USERS CHOICE PER QUESTION
htmlObjects.options.container.addEventListener("click", function (event) {
  var element = event.target;
  //HANDLE GRAPHIC CHANGES FIRST
  if (element.matches("button") === true) {
    if (hasntChosenYet === true && quizStatus === "Active") {
      hasntChosenYet = false;
      resetButtonColors();
      element.style.color = "white";
      element.style.backgroundImage = "radial-gradient(navy 75%, gray 100%)";
      //NOW EVALUATE THE CHOICE
      if (element.parentElement.children[1] === htmlObjects.options.positionE) {
        chosenOption = element.parentElement.children[1].value;
      } else {
        chosenOption = element.parentElement.children[1].textContent;
      }
      //KEEP SCORE AND GIVE FEEDBACK
      if (chosenOption === quizContent.correctAnswer.at(index - 1)) {
        document.querySelector('#right-answer').play();
        correct++;
        htmlObjects.correctTally.textContent = correct;
        htmlObjects.correctAnswer.textContent = "Well done!  The correct answer was indeed: " + quizContent.correctAnswer.at(index - 1);
      } else {
        document.querySelector('#wrong-answer').play();
        incorrect++;
        htmlObjects.incorrectTally.textContent = incorrect;
        htmlObjects.correctAnswer.textContent = "That'll cost you one!  The correct answer was: " + quizContent.correctAnswer.at(index - 1);
      }
    }
  }
}
);