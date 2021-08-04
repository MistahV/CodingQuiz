/* Define variables */

let startBtn = document.getElementById('start');
let saveScore = document.getElementById("saveScore")

let questions = [{
    question:'When designing an webpage to be mobile-friendly in the CSS, what is the screen size to keep in mind when using ___?',
    answers: ['1', '2', '3', '4'],
    correctAnswer: '3'
}, {
    question: 'What is better: CSS, JS, or HTML?',
    answers: ['CSS', 'JS', 'HTML', 'All are good!'],
    correctAnswer: 'CSS'
}, {
    question: 'Which of the following is NOT considered a good use of classes when coding?',
    answers: ['to identify specific elements in JavaScript', 'answer 2', 'answer 3', 'answer 4'],
    correctAnswer: 'answers 3'
}];

let currentQuestion = 0;
let score = 0;
let secondsLeft = 90

let highScores = [];
if(localStorage.getItem("highscores")){
    highScores = JSON.parse(localStorage.getItem("highscores"))
}
let selectedAnswers = [];
const totalQuestions = questions.length;
const timer = document.querySelector('#timer')
const questionEl = document.querySelector('#question');



// Answer button variables 

const answer1 = document.querySelector('#answer1');
const button1 = document.createElement('button');
      button1.type = 'button'

const answer2 = document.querySelector('#answer2');
const button2 = document.createElement('button');
      button2.type = 'button'

const answer3 = document.querySelector('#answer3');
const button3 = document.createElement('button');
      button3.type = 'button'

const answer4 = document.querySelector('#answer4')
const button4 = document.createElement('button');
      button4.type = 'button'

const next = document.querySelector('#next');
const nextButton = document.createElement('button');
      nextButton.type = 'button'


// const restartButton = document.querySelector('.restart');
// const result = document.querySelector('.result');



/* Add functions */

// start quiz --> init
function startQuiz() {
    /* start timer */
   
    function startTimer() {
      let quizTimer = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left to finish the quiz!";
        if (secondsLeft <= 0 || currentQuestion >= questions.length) {
            clearInterval(quizTimer);
            endQuiz();
        }
      }, 1000);
    }
    startTimer();
    getQuestion();

    function getQuestion() {
       questionEl.innerHTML = `${currentQuestion+1}. ${questions[currentQuestion].question}`;
       
       answer1.appendChild(button1)  
       button1.innerHTML = `${questions[currentQuestion].answers[0]}`
       button1.addEventListener('click', checkAnswer);   
     
       answer2.appendChild(button2)  
       button2.innerHTML = `${questions[currentQuestion].answers[1]}`
       button2.addEventListener('click', checkAnswer);   

       answer3.appendChild(button3)  
       button3.innerHTML = `${questions[currentQuestion].answers[2]}`
       button3.addEventListener('click', checkAnswer);   

       answer4.appendChild(button4)  
       button4.innerHTML = `${questions[currentQuestion].answers[3]}`
       button4.addEventListener('click', checkAnswer);   
    }

    function checkAnswer(event) {
        console.log(event.target.textContent);
       
      
      if(this.textContent == questions[currentQuestion].correctAnswer) {
          score+=10;
          console.log("correct")
      } else{
          secondsLeft-=15
          console.log("incorrect")
      };
       
      currentQuestion++;

      if(currentQuestion < questions.length){
          getQuestion()
        };
   
   }
}


function endQuiz() {
   

    console.log(score)

    document.getElementById("quizContainer").setAttribute("style", "display: none;")
    document.getElementById("scoreArea").setAttribute("style", "display: block;")
    document.getElementById("score").innerHTML = `Your final quiz score is ${score}!`
    // set final score
    // show end screen
    // clear out timer
    // shows "save score?" button
}

function saveHighScore() {
    // prompt for initials
    let initials = document.getElementById("initials").value
    // save score
  
    highScores.push(score+initials)
    localStorage.setItem("highscores", JSON.stringify(highScores))
}


/* Event listeners */

startBtn.addEventListener('click', startQuiz);

saveScore.addEventListener('click', saveHighScore);









/* Previously attemped code below */


 //    if (button1.clicked == true) {
    //        selectedAnswers.push(chooseAnswer1);
    //        console.log('you clicked the first choice')
    //    } else if (button2.clicked == true) {
    //        selectedAnswers.push(chooseAnswer2);
    //    } else if (button3.clicked == true) {
    //        selectedAnswers.push(chooseAnswer3);
    //    } else if (button4.clicked == true) {
    //        selectedAnswers.push(chooseAnswer4);
    //    }

       
    //    /* use push to send selected answer choice data index into selectedAnswers array? */

    //    if (selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer) {

    //    }



     // if+else function to check whether there are any more questions left in the quiz
    //    if (currentQuestion < totalQuestions-1) {


    //      next.appendChild(nextButton);
    //      nextButton.innerHTML= 'Click for next question!';
    //      nextButton.addEventListener('click', getQuestion);
    //      // How to loop through questions / answers in questions array?

    //     } else {
    //      endQuiz();
    //    };







