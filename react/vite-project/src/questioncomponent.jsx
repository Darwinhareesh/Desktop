import React from 'react';

function QuestionComponent({ question, handleAnswer }) {
    if (!question) return <div>Loading...</div>;

    const shuffledAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

    return (
        <div>
            <h2>{question.question}</h2>
            {shuffledAnswers.map((answer, index) => (
                <button key={index} onClick={() => handleAnswer(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    );
}

export default QuestionComponent;
