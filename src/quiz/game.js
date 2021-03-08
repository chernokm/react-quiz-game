/**
 * The game is responsible for orchestrating the flow of the quiz game
 */

import { useState } from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaData from "./trivia-data";

function Game() {
    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false,
    });

    const {score, triviaIndex, isGameOver} = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaData.length;
    const questionDifficulty = triviaData.difficulty;



    const restartGame = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            isGameOver: false,
        });
    };

    const loadNextQuestion = () => {
        if (triviaIndex >= triviaData.length - 1){
            setGameState({ ...gameState, isGameOver: true});
        } else {
            setGameState({
                ...gameState,
                triviaIndex: triviaIndex + 1,
            });
        }
        
    };

    const onAnswerSelected = (wasPlayerCorrect) => {
        if(wasPlayerCorrect){
            setGameState({
                ...gameState,
                score: score + 1,
            });
        }
    };

    let pageContent;
    if (isGameOver) {
        pageContent = <EndScreen score={score} bestScore={0} onRetryClick={restartGame}></EndScreen>;
    } else {
        const triviaQuestion = triviaData[triviaIndex];
        const {correct_answer, incorrect_answers, question} = triviaQuestion;
        pageContent = <TriviaItem key={triviaIndex} question={question} correctAnswer={correct_answer} incorrectAnswers={incorrect_answers} onNextClick={loadNextQuestion} onAnswerSelected={onAnswerSelected}></TriviaItem>;
    }

    return (
        <>
            <Stats score={score} questionNumber={questionNumber} totalQuestions={numQuestions} questionDifficulty={difficulty}></Stats>
            {pageContent}
            
        </>
    );
}

export default Game;
