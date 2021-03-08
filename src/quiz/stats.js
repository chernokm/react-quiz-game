/**
 * renders scores and current question number
 */
import "./stats.css";

function Stat({label, value}) {
    return (
        <li className="stats__stat-container">
            <div className="stats__stat-label">{label}</div>
            <div className="stats__stat-value">{value}</div>
        </li>
    );
}

function Stats({score, questionNumber, totalQuestions, questionDifficulty}) {



    return (
        <ul className="stats">
            <Stat label="Score" value={score} />
            <Stat label="Question" value={`${questionNumber} / ${totalQuestions}`} />
            <Stat label="Difficulty" value={questionDifficulty}/>
        </ul>
    )
}

export default Stats;