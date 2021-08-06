/* Define variables */

let startBtn = document.getElementById('start');
let saveScore = document.getElementById("saveScore")

let questions = [{
    question:'When designing an webpage to be mobile-friendly in the CSS, what is the max-width that should be used with Media Query?',
    answers: ['480px', '720px', '820px', '360px'],
    correctAnswer: '480px'
}, {
    question: 'Which of the following is an example of a "code smell" (inefficient code)?',
    answers: ['Having significantly different classes for different HTML elements', 'Writing JS functions that complete tasks with the fewest number of steps', 'Using indentation in HTML files to clearly show parent-child relationships', 'Including multiple "div" elements to the HTML when just one would have sufficed'],
    correctAnswer: 'Including multiple "div" elements to the HTML when just one would have sufficed'
}, {
    question: 'Which of the following is NOT considered a good use of IDs when coding?',
    answers: ['To target specific elements in JavaScript', 'To add style to HTML elements in the CSS sheets', 'To uniquely identify different components of the HTML', 'All the above'],
    correctAnswer: 'To add style to HTML elements in the CSS sheets'
}, {
    question: 'What are some tools and strategies you can use to debug your code when it is not functioning properly?',
    answers: ['Adding console.logs to your JS to make sure that certain functions are being read', 'Using "Inspect" / Chrome Dev Tools to look at your code on Chrome', 'Double-checking syntax in your code', 'All the above'],
    correctAnswer: 'All the above'
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
      button1.className = 'answerButton'

const answer2 = document.querySelector('#answer2');
const button2 = document.createElement('button');
      button2.type = 'button'
      button2.className = 'answerButton'

const answer3 = document.querySelector('#answer3');
const button3 = document.createElement('button');
      button3.type = 'button'
      button3.className = 'answerButton'

const answer4 = document.querySelector('#answer4')
const button4 = document.createElement('button');
      button4.type = 'button'
      button4.className = 'answerButton'

const next = document.querySelector('#next');
const nextButton = document.createElement('button');
      nextButton.type = 'button'


// const restartButton = document.querySelector('.restart');
// const result = document.querySelector('.result');



/* Add functions */

// start quiz --> init
function startQuiz() {
    /* start timer */
   startBtn.setAttribute('style', 'display: none;');

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
   
    // show end screen
    document.getElementById("quizContainer").setAttribute("style", "display: none;")
    document.getElementById("scoreArea").setAttribute("style", "display: block;")
    document.getElementById("score").innerHTML = `Your final quiz score is ${score}!`
    timer.setAttribute("style", "display: none;")
    
    // clear out timer
    // shows "save score?" button
}

function saveHighScore() {
    // prompt for initials
    let initials = document.getElementById("initials").value;
    // save score
    
    highScores.push(score+initials);
    localStorage.setItem("highscores", JSON.stringify(highScores));

    alert('Your score has been successfully saved to the Highscores page!');
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







