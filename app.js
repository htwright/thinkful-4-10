var appState = {
  currentQuestion : 0,
  results : [],
  questions: [
    {
     question:'5*2',
     choices:[4, 13, 5, 10, 93],
      answer:10
    },
    {
    question:'10*5',
    choices:[105, 15, 5, 1, 50],
      answer:50
    },
    {
      question:'5+3',
      choices:[8, 5, 11, 93, 53],
      answer:8
    },
    {
      question:'5-3',
      choices:[3, 2, 9, 5, 10],
      answer:2
    },
    {
      question:'15+3',
      choices:[8, 3, 18, 23, 41],
      answer:18
    }
  ]
//draw options from ${questions[index].choices}
  //map array and draw HTML
//answer is the position of the answer in the choices array
};

function render(state, element, choice){
  element.empty();
  let index = state.currentQuestion;
  var choicesHTML =
      //added ID to quizForm for selection purposes
    `<h1>${state.questions[index].question}</h1>
      <form id = 'quizForm'>
      <input type ='radio' name='choice' value ='${state.questions[index].choices[0]}'> ${state.questions[index].choices[0]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[1]}'> ${state.questions[index].choices[1]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[2]}'> ${state.questions[index].choices[2]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[3]}'> ${state.questions[index].choices[3]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[4]}'> ${state.questions[index].choices[4]}<br>
      <button type='submit' class='submit'>submit</button>
     </form>`;
  var correctAnswers = appState.results.filter(function(result){
    return result === 'correct';
  });
  var incorrectAnswers = appState.results.filter(function(result){
    return result === 'incorrect';
  });

  var closingScreenHTML = 
    `<h1>Game Over</h1>
    <span class="">You got ${correctAnswers.length} of ${appState.questions.length}.</span>
    <button class="startOverButton">Start Over
    </button>`;
  var startingScreenHTML = `<h1>Math Quiz</h1><br>
<button class= 'startButton'> Start quiz!</button>
`;

    if (choice == 'choices'){
      element.html(choicesHTML);
    } else if (choice == 'closingScreen'){
      element.html(closingScreenHTML);
    } else if (choice == 'startingScreen'){
      element.html(startingScreenHTML)
    }
}

function nextQuestion(state) {

  if (state.results[state.currentQuestion] == "correct") {
		console.log("Your answer was correct");
	}
  else if (state.results[state.currentQuestion] == "incorrect") {
		console.log("Your answer was incorrect");
	} else {
      console.log("Your answer was invalid");
    }

}

function checkAnswer(state, input){
  let currentIndex = state.currentQuestion; 
  let solution = state.questions[currentIndex].answer;
  if(input === solution){
    state.results.push("correct");
  } else {
    state.results.push("incorrect");
  }
}


//start
$(document).ready(function(){ 
let container = $('.container');
let userInput = $('#quizForm').val();
    $('.startButton').click(function(event){
      event.preventDefault();
      appState.currentQuestion = 0;
      render(appState, container, 'choices');
    })  

    $('.submit').click(function(event){
      event.preventDefault();
      checkAnswer(appState, userInput);
      appState.currentQuestion++;
      if(appState.currentQuestion < appState.questions.length ) {
        render(appState, container, 'choices');
      }
      else {
        render(appState,container,'closingScreen');
      }


    })
  
    $('.startOverButton').click(function(event){
      event.preventDefault();
      appState.currentQuestion = null;
      appState.results = [];
      render(appState,container, 'openingScreen');  
    })

})
//render functions
