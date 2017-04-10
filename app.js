var appState = {
  currentQuestion : 0,
  results : [],
  questions: [
    {
     question:'5*2',
     choices:[4, 13, 5, 10, 93],
      answer:3
    },
    {
    question:'10*5',
    choices:[105, 15, 5, 1, 50],
      answer:4
    },
    {
      question:'5+3',
      choices:[8, 5, 11, 93, 53],
      answer:0
    },
    {
      question:'5-3',
      choices:[3, 2, 9, 5, 10],
      answer:1
    },
    {
      question:'15+3',
      choices:[8, 3, 18, 23, 41],
      answer:2
    }
  ]
//draw options from ${questions[index].choices}
  //map array and draw HTML
//answer is the position of the answer in the choices array
};

function render(state, element, choice){
  element.clear();
  let index = state.currentQuestion;
  var choicesHTML =
    `<form>
      <input type ='radio' name='choice' value ='${state.questions[index].choices[0]}'> ${state.questions[index].choices[0]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[1]}'> ${state.questions[index].choices[1]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[2]}'> ${state.questions[index].choices[2]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[3]}'> ${state.questions[index].choices[3]}<br>
      <input type ='radio' name='choice'value ='${state.questions[index].choices[4]}'> ${state.questions[index].choices[4]}<br>
      <button type='submit' class='submitButton'>submit</button>
     </form>`;
  if (choice == 'choices'){
    element.html(choicesHTML);
  }
  }




//take the box input, go to questions[currentQuestion], iterate through and see if provided answer : true




//state manipulation functions



//  if (state.currentQuestion == 5){
//    all render logic inside render func
//  }


//initialize quiz, set currentQuestion to 0, generate first question page

//generate next question page
function nextQuestion(state) {

  if (state.results[state.currentQuestion] == "correct") {
		console.log("Your answer was correct");
	}
  else if (state.results[state.currentQuestion] == "incorrect") {
		console.log("Your answer was incorrect");
	} else {
      console.log("Your answer was invalid");
    }
//	state.currentQuestion++;
	//call render function

}

//check answer
//take in the answer submitted + state (currentQuestion)

function checkAnswer(state, input){
  let currentIndex = state.currentQuestion; 
  let solution = state.questions[currentIndex].answer;
  if(input === solution){
    state.results.push("correct");
  } else {
    state.results.push("incorrect");
  }
}
let test = 10;
checkAnswer(appState, test);
nextQuestion(appState);      
//go to beginning





//event handlers


//start
$(document).ready(function(){ 
let container = $('.container');
    $('.startButton').click(function(){
      render(appState, container, choices);
    })
    //submit answer

    $('.submit').click(function(){
      
    })
    //wrap all options + submit in an <input type =radio>
    //$('input[type=radio]').click(function() {
    //    $("form id or class").submit();
    //});

    //try again
    $('.start-over').click(function(){

    })

})
//render functions
