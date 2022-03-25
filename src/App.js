import './App.css';
import React, { useState } from 'react';

function App() {

  const quizQuestions =[
    {
        question:"What is my name ?",
        answers : 
        [
          {answerText:"Bojack horseman", isTrue: true},
          {answerText:"Hoejack Boresman", isTrue: false},
          {answerText:"Bojack sugermen", isTrue: false},
          {answerText:"hnnery fondle", isTrue: false}
        ]
    },
    {
        question:"Back in the ___ I was in a very famous TV show",
        answers : [
          {answerText:"2000s" , isTrue: false},
          {answerText:"80's" , isTrue: false},
          {answerText:"70's" , isTrue: false},
          {answerText:"90's", isTrue: true}
        ]

    },
    {
        question:"Philbert was directed by the company ?",
        answers : [
          {answerText:"PB & Livin"  , isTrue: false},
          {answerText:"Cabracadabra"  , isTrue: false},
          {answerText:"Whattimeisitrightnow.com" , isTrue: true},
          {answerText:"Vim"  , isTrue: false}
        ]


    },
    {
        question:"'sometimes life is a bitch and you keep living'  was said by",
        answers : [
          {answerText:"Hollyhock", isTrue: false},
          {answerText:"Sara lynn", isTrue: false},
          {answerText:"diaine nuggets", isTrue: false},
          {answerText:"Bojack", isTrue: true}
        ]
    }
  ]

const [currentQuestion, setQuestion] = useState(0);
const [score, setScore] = useState(0);
const [endQuiz, setEnd] = useState (false);

const answerButtonClick=(isTrue)=> {

  if ( isTrue==true)
  {
    setScore(score+1)
  }


  const newQuestion = currentQuestion+1
  if (quizQuestions.length > newQuestion){
    setQuestion (newQuestion)  
    console.log(`new question ${newQuestion}`)
  }
  else {
    //alert("apple")
    setEnd (true)
    console.log("endquiz "+endQuiz)
  }
}

const resetGame=()=>{
  setQuestion(0);
  setScore(0);
  setEnd(false)
}




  return (

    <div className="quiz-container">
      {endQuiz ? (
        <div>
          <h1>
            SCORE IS {score}
          </h1>
          <button className='answerButton' onClick={resetGame}>Reset Game</button>
        </div>
      ):( 
        <div>
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <div>
          {quizQuestions[currentQuestion].answers.map((answers)=>(
          <button className='answerButton' onClick={()=>answerButtonClick(answers.isTrue)}>{answers.answerText}</button>))}
          </div>
        </div>
      )}  
     
    </div>
  );
}

export default App;
