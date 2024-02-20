import React, { useState } from 'react';


export default function App() {
    const questions = [
        {
            questionText: 'Who is The Vice Chancellor of Bowen University?',
            answerOptions: [
                { answerText: 'Jonathan Babalola', isCorrect: false },
                { answerText: 'Joshua Ogunwole', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
        {
            questionText: 'Who wrote the book "To Kill a Mockingbird"?',
            answerOptions: [
                { answerText: 'Stephen King', isCorrect: false },
                { answerText: 'Harper Lee', isCorrect: true },
                { answerText: 'J.K. Rowling', isCorrect: false },
                { answerText: 'Mark Twain', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            alert('Right Answer');
            setScore(score + 1);
        }


		

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true); 
        }
    };

    return (
        <div className='body'>
			 <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span> of {questions.length}
                            </div>
            <h1>Quiz App</h1>
			 <nav class="navbar">
   				 <div class="container">
      				<a href="#" class="logo">Qwizzer</a>
      					<ul class="nav-links">
       						 <li><a href="#">Home</a></li>
       						 <li><a href="#">About</a></li>
        					 <li><a href="#">Services</a></li>
       						 <li><a href="#">Contact</a></li>
     					 </ul>
    			    </div>
 			 </nav>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        
                        <div>You scored {score} out of {questions.length}</div>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                           
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
