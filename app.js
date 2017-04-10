var appState = {
  currentQuestion : 0,
  results : [],
  questions: [
    {
     question:'5*2',
     '6' : false,
     '5' : false,
     '10':true,
     '15':false,
     '16':false,
      answer:10
    },
    {
    question:'10*5',
    '4':false,
    '7':false,
    '50':true,
    '43':false,
    '55':false,
      answer:50
    },
    {
      question:'5+3',
      '5':false,
      '11':false,
      '13':false,
      '8':true,
      '10':false,
      answer:8
    },
    {
      question:'5-3',
      '5':false,
      '11':false,
      '13':false,
      '2':true,
      '10':false,
      answer:2
    },
    {
      question:'15+3',
      '5':false,
      '11':false,
      '13':false,
      '18':true,
      '10':false,
      answer:18
    }
  ]

 
};


//take the box input, go to questions[currentQuestion], iterate through and see if provided answer : true




//state manipulation functions






//initialize quiz, set currentQuestion to 0, generate first question page

//generate next question page
function nextQuestion(state) {
	if (state.results[state.currentQuestion] == "correct") {
		console.log("Your answer was correct");
	}
	else {
		console.log("Your answer was incorrect");
	}
	state.currentQuestion++;
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
//select answer
//submit answer
//wrap all options + submit in an <input type =radio>
//$('input[type=radio]').click(function() {
//    $("form id or class").submit();
//});

//try again



//render functions


