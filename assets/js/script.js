/* Define variables */

let startBtn = document.getElementById('start');

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
let questions = [{
    question:'When designing an webpage to be mobile-friendly in the CSS, what is the screen size to keep in mind when using ___?',
    answers: ['1', '2', '3', '4']
}, {
    question: 'What is better: CSS, JS, or HTML?',
    answers: ['CSS', 'JS', 'HTML', 'All are good!']
}, {
    question: 'Which of the following is NOT considered a good use of classes when coding?',
    answers: ['to identify specific elements in JavaScript', 'answer 2', 'answer 3', 'answer 4']
}];
     
const totalQuestions = questions.length;

const timer = document.querySelector('#timer')
const questionEl = document.querySelector('#question');

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
;

// const nextButton = document.querySelector('.next');
// const previousButton = document.querySelector('.previous');
// const restartButton = document.querySelector('.restart');
// const result = document.querySelector('.result');
// const container = document.querySelector('.quiz-container');


/* Add functions */

// start quiz --> init
function startQuiz() {
    /* start timer */
   let secondsLeft = 90
    function startTimer() {
      let quizTimer = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left to finish the quiz!";
        if (secondsLeft === 0) {
            clearInterval(quizTimer);
            sendMessage();
        }
      }, 1000);
    }
    startTimer();
    /* find an area on your HTML and show the first question */
    getQuestion();

    function getQuestion() {
       questionEl.innerHTML = `${currentQuestion+1}. ${questions[currentQuestion].question}`;
       
       answer1.appendChild(button1)  
       button1.innerHTML = `${questions[currentQuestion].answers[0]}`   
     
       answer2.appendChild(button2)  
       button2.innerHTML = `${questions[currentQuestion].answers[1]}`

       answer3.appendChild(button3)  
       button3.innerHTML = `${questions[currentQuestion].answers[2]}`

       answer4.appendChild(button4)  
       button4.innerHTML = `${questions[currentQuestion].answers[3]}`
       
       /* add event listener for each button created */
       checkAnswer();
    }
    function checkAnswer() {
       /* compares user selection to correct answer */
       /* incorrect --> remove seconds */
       /* track score */
       getQuestion();

       endQuiz();
    }
}



function endQuiz() {
    // set final score
    // show end screen
    // clear out timer
    // shows "save score?" button
}

function saveHighScore() {
    // prompt for initials
    // save score
}



/* Event listeners */

startBtn.addEventListener('click', startQuiz);

saveScore.addEventListener('click', saveHighScore);





















// //Set of questions and answers -DONE
// //Give each answer an identifier -DONE
// //Each identifier will increment through each question
// //St the end the identifier with the highest number is the winner 
// //Display the answer and rest the quiz

// //pass results frm previous question to the next page usig localcache

// //Randomise the background of the quiz for each questiion

// //Possible - Personality Traits
// // 15 -21- You Need Help
// // 10 - 15 - Good Soul
// // 5- 10 - Meh 
// // 5 - Are You Even Real



// //Function to generate question 
// function generateQuestions (index) {
//     //Select each question by passing it a particular index
//     const question = questions[index];
//     const option1Total = questions[index].answer1Total;
//     const option2Total = questions[index].answer2Total;
//     const option3Total = questions[index].answer3Total;
//     //Populate html elements 
//     questionEl.innerHTML = `${index + 1}. ${question.question}`
//     option1.setAttribute('data-total', `${option1Total}`);
//     option2.setAttribute('data-total', `${option2Total}`);
//     option3.setAttribute('data-total', `${option3Total}`);
//     option1.innerHTML = `${question.answer1}`
//     option2.innerHTML = `${question.answer2}`
//     option3.innerHTML = `${question.answer3}`
// }


// function loadNextQuestion () {
//     const selectedOption = document.querySelector('input[type="radio"]:checked');
//     //Check if there is a radio input checked
//     if(!selectedOption) {
//         alert('Please select your answer!');
//         return;
//     }
//     //Get value of selected radio
//     const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

//     ////Add the answer score to the score array
//     score.push(answerScore);

//     selectedAnswersData.push()
    

//     const totalScore = score.reduce((total, currentNum) => total + currentNum);

//     //Finally we incement the current question number ( to be used as the index for each array)
//     currentQuestion++;

//         //once finished clear checked
//         selectedOption.checked = false;
//     //If quiz is on the final question
//     if(currentQuestion == totalQuestions - 1) {
//         nextButton.textContent = 'Finish';
//     }
//     //If the quiz is finished then we hide the questions container and show the results 
//     if(currentQuestion == totalQuestions) {
//         container.style.display = 'none';
//         result.innerHTML =
//          `<h1 class="final-score">Your score: ${totalScore}</h1>
//          <div class="summary">
//             <h1>Summary</h1>
//             <p>Possible - Personality Traits, see below for a summary based on your results:</p>
//             <p>15 - 21- You Need Help</p>
//             <p>10 - 15 - Good Soul</p>
//             <p>5 - 10 - Meh </p>
//             <p>5 - Are You Even Real</p>
//         </div>
//         <button class="restart">Restart Quiz</button>
//          `;
//         return;
//     }
//     generateQuestions(currentQuestion);
// }

// //Function to load previous question
// function loadPreviousQuestion() {
//     //Decrement quentions index
//     currentQuestion--;
//     //remove last array value;
//     score.pop();
//     //Generate the question
//     generateQuestions(currentQuestion);
// }

// //Fuction to reset and restart the quiz;
// function restartQuiz(e) {
//     if(e.target.matches('button')) {
//     //reset array index and score
//     currentQuestion = 0;
//     score = [];
//     //Reload quiz to the start
//     location.reload();
//     }

// }


// generateQuestions(currentQuestion);
// nextButton.addEventListener('click', loadNextQuestion);
// previousButton.addEventListener('click',loadPreviousQuestion);
// result.addEventListener('click',restartQuiz);
