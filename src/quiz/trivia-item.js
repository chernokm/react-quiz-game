/**
 * Trivia items renders an individual question and waits for answer
 */
import shuffle from "../common/utils/shuffle";
import "./trivia-item.css";
import { useState } from "react";

function TriviaItem({correctAnswer, incorrectAnswers, question, onNextClick, onAnswerSelected}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const hasPickedAnswer = selectedAnswer !== null;

    console.log(selectedAnswer, hasPickedAnswer);

    const allAnswers = [correctAnswer, ...incorrectAnswers];
    const [shuffledAnswers] = useState(() => shuffle(allAnswers));

    let nextButtonClassName = "trivia-item__button trivia-item__next-button";
    if (!hasPickedAnswer) nextButtonClassName += " trivia-item__button--disabled";

    const onAnswerClick = (event) => {
        const playerAnswer = event.target.innerHTML;
        setSelectedAnswer(playerAnswer);
        const wasPlayerCorrect = playerAnswer === correctAnswer;
        console.log(wasPlayerCorrect);
        onAnswerSelected(wasPlayerCorrect);
    };
    


    return (
        <div>
            <p className="trivia-item__question">{question}</p>
            <ul className="trivia-item__answers">
                {shuffledAnswers.map((answer, i) => {

                    let className = "trivia-item__button";

                    if (hasPickedAnswer) {
                        const pickedThisAnswer = answer === selectedAnswer;
                        const isThisCorrect = answer === correctAnswer;

                        if (pickedThisAnswer && isThisCorrect) {
                            className += " trivia-item__button--correct";
                        } 
                        else if (pickedThisAnswer && !isThisCorrect) {
                            className += " trivia-item__button--incorrect";
                        } else {
                            className += " trivia-item__button--disabled";
                        }
                    }

                    return (
                        <li key={answer}>
                            <button className={className} onClick={onAnswerClick} disabled={hasPickedAnswer}>{answer}</button>
                        </li>
                    );
                })}
            </ul>
            <button className={nextButtonClassName} onClick={onNextClick} disabled={!hasPickedAnswer}>
                Next
            </button>
        </div>
    )
}

export default TriviaItem;