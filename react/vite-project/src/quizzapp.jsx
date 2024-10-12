import React, { useState, useEffect } from 'react';
import QuestionComponent from './QuestionComponent';
import ResultComponent from './ResultComponent';

function QuizApp() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setQuestions(data.results);
            } catch (error) {
                setError(error.message);
                setQuestions([
                    {
                        question: "What is the capital of France?",
                        correct_answer: "Paris",
                        incorrect_answers: ["London", "Berlin", "Madrid"]
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        correct_answer: "Mars",
                        incorrect_answers: ["Jupiter", "Venus", "Saturn"]
                    },
                    {
                        question: "What is the largest ocean on Earth?",
                        correct_answer: "Pacific Ocean",
                        incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
                    },
                    {
                        question: "Who wrote 'To Kill a Mockingbird'?",
                        correct_answer: "Harper Lee",
                        incorrect_answers: ["Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"]
                    },
                    {
                        question: "What is the hardest natural substance on Earth?",
                        correct_answer: "Diamond",
                        incorrect_answers: ["Gold", "Silver", "Iron"]
                    }
                    // Add more mock questions as needed
                ]);
            }
        };

        fetchData();
    }, []);

    const handleAnswer = (selectedAnswer) => {
        if (questions[currentQuestion] && selectedAnswer === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResults(true);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {showResults ? (
                <ResultComponent score={score} />
            ) : (
                questions.length > 0 ? (
                    <QuestionComponent
                        question={questions[currentQuestion]}
                        handleAnswer={handleAnswer}
                    />
                ) : (
                    <div>Loading...</div>
                )
            )}
        </div>
    );
}

export default QuizApp;
