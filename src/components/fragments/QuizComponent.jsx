// QuizComponent.js
import React from 'react';

const QuizComponent = ({
  questions,
  currentQuestion,
  score,
  showScore,
  handleAnswerOptionClick,
  handleRestartQuiz
}) => {
  return (
    <div className="w-full p-8 rounded-lg shadow-lg sm:max-w-md lg:min-w-full sm:mx-auto bg-darken lg:h-full">
      {showScore ? (
        <div className="text-center">
          <div className="mb-4 text-2xl font-bold text-gray-100">Your Score: {score}</div>
          <button
            className="px-4 py-2 mt-4 text-white rounded bg-light-blue font-poppins"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="mb-3 text-sm font-medium tracking-wider text-gray-400 font-poppins">
              {currentQuestion + 1}/{questions.length}
            </div>
            <div className="mb-4 text-lg text-gray-100 font-poppins">{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].code && (
              <SyntaxHighlighter language="go" style={solarizedDark} className="mb-4 rounded-lg font-poppins">
                {questions[currentQuestion].code}
              </SyntaxHighlighter>
            )}
          </div>
          <div className="space-y-2">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className="w-full px-4 py-2 text-left rounded bg-dark-blue font-poppins text-light-blue hover:bg-light-blue hover:text-dark-blue"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;