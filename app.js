const appState = {
  currentQuestion: null,
  results: [],
  questions: [
    {
      question: '5 * 2',
      choices: [4, 13, 5, 10, 93],
      answer: 10
    },
    {
      question: '10 * 5',
      choices: [105, 15, 5, 1, 50],
      answer: 50
    },
    {
      question: '5 + 3',
      choices: [8, 5, 11, 93, 53],
      answer: 8
    },
    {
      question: '5 - 3',
      choices: [3, 2, 9, 5, 10],
      answer: 2
    },
    {
      question: '15 + 3',
      choices: [8, 3, 18, 23, 41],
      answer: 18
    }
  ]
  //draw options from ${questions[index].choices}
  //map array and draw HTML
  //answer is the position of the answer in the choices array
};
function getCorrect(){
  let x = appState.results.filter(function (result) {
  return result === 'correct';
  })
  return x;
}
function getIncorrect(){
  let x = appState.results.filter(function (result) {
  return result === 'incorrect';
  })
  return x;
}
//users must be able to see which question they are on currently ${state.currentquestion +1} and current score on choices screen
//intermediate screen must show correct answer if provided answer was incorrect


function render(state, element, choice) {
  element.empty();
  let index = state.currentQuestion;
  if (choice == 'choices') {
  let correctAnswers = getCorrect();
  //let current = 
  let choicesHTML =
 
    //added ID to quizForm for selection purposes
    `<h1>QUESTION #${state.currentQuestion +1}<br> ${state.questions[index].question}</h1>
      <h2>Current Score = ${correctAnswers.length}</h2>
      <form id = 'quizForm'>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[0]}'> ${state.questions[index].choices[0]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[1]}'> ${state.questions[index].choices[1]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[2]}'> ${state.questions[index].choices[2]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[3]}'> ${state.questions[index].choices[3]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[4]}'> ${state.questions[index].choices[4]}<br>
      <button id='submitButton' type='button'>submit answer</button>
     </form>`;
      element.html(choicesHTML);

  }  else if (choice == 'closingScreen') {
    let correctAnswers = getCorrect();
    let incorrectAnswers = getIncorrect();

  let closingScreenHTML =
    `<h1>Game Over</h1>
    <span class="">You got ${correctAnswers.length} of ${appState.questions.length}correct.</span>
    <button class="startOverButton">Start Over
    </button>`;
    element.html(closingScreenHTML);

  } else if (choice == 'startingScreen') {
  let startingScreenHTML = `<h1>Math Quiz</h1><br>
    <button class= 'startButton'> Start quiz!</button>`;
    element.html(startingScreenHTML);
  } else if (choice == 'intermediateScreen'){
    let correctAnswers = getCorrect();
    let intermediateScreenHTML = `<h1>That answer was ${state.results[index]}.</h1>
                                  <h2>You have${correctAnswers.length} out of ${appState.results.length}correct.</h2>`;
    if (state.results[index] == 'incorrect'){
      intermediateScreenHTML += `<h3> correct answer was ${state.questions[index].answer}`
    }
    element.html(intermediateScreenHTML);
  }
}

function checkAnswer(state, input) {
  let currentIndex = state.currentQuestion;
  let solution = state.questions[currentIndex].answer;
  if (input == solution) {
    state.results.push("correct");
  } else {
    state.results.push("incorrect");
  }
}

//be able to let = correctAnswers();

//filter through results return the array thats made with filter


$(document).ready(function () {
    let container = $('.container');
    render(appState, container, 'startingScreen');
  //parseInt( $("input[name='choice']:checked").val() );
    $('div').on('click', '.startButton', function (event) {
      appState.currentQuestion = 0;
      render(appState, container, 'choices');
    })
  $('div').on('click', '#submitButton', function (event) {
    event.preventDefault();
    let userInput = parseInt($("input[name='choice']:checked").val());
    console.log(userInput);
    if (isNaN(userInput) === false){
      checkAnswer(appState, userInput);
      if (appState.currentQuestion < appState.questions.length - 1) {
        render(appState, container, 'intermediateScreen');
        appState.currentQuestion++;
        setTimeout(function(){
          render(appState, container, 'choices');
        }, 4000);
      } else {
        render(appState, container, 'closingScreen');
      }
    }
  })

  $('div').on('click', '.startOverButton', function (event) {
//    event.preventDefault();
    appState.currentQuestion = null;
    appState.results = [];
    render(appState, container, 'startingScreen');
  })

})
//render functions