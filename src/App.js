import './App.css';
import React from 'react';

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




  return (
    <div className="quiz-container">
      <h1>BOJACK QUIZ</h1>
      <h2>{quizQuestions[0].question}</h2>
      <button className='answerButton'>{quizQuestions[0].answers[0].answerText}</button>
      <button className='answerButton'>{quizQuestions[0].answers[1].answerText}</button>
      <button className='answerButton'>{quizQuestions[0].answers[2].answerText}</button>
      <button className='answerButton'>{quizQuestions[0].answers[3].answerText}</button>
      
    </div>
  );
}

export default App;
