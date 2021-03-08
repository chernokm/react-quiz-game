import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiDemo() {
    const [isRunning, setIsRunning] = useState(false);
    const [numParticles, setNumParticles] = useState(200);
    const [wind, setWind] = useState(0);
    const [gravity, setGravity] = useState(0);

    const colors = ["#ff45f6", "#be45ff", "#ff82da"];

    const toggleConfetti = () => setIsRunning(!isRunning);
    const onParticlesChange = (event) => {
        const newNumParticles = parseInt(event.target.value, 10);
        setNumParticles(newNumParticles);
    };

    const onWindChange = (event) => {
        const newWind = parseFloat(event.target.value);
        setWind(newWind);    
    };

    const onGravityChange = (event) => {
        const newGravity = parseFloat(event.target.value);
        setGravity(newGravity);
    };


    const buttonText = isRunning ? `Turn Confetti Off` : "Turn Confetti On";

    return (
        <div>
            <div>
                <label htmlFor="num-particles">Num Particles:</label>
                <input type="range" id="num-particles" min="1" max="3000" step="1" value={numParticles} onChange={onParticlesChange}></input>
            </div>
            <div>
                <label htmlFor="wind">Wind:</label>
                <input type="range" id="wind" min="-1" max="1" step="0.1" value={wind} onChange={onWindChange}></input>
            </div>
            <div>
                <label htmlFor="gravity">Gravity:</label>
                <input type="range" id="gravity" min="0" max="1" step="0.1" value={gravity} onChange={onGravityChange}></input>
            </div>
            <div>
                <button onClick={toggleConfetti}>{buttonText}</button>
            </div>
            <Confetti numberOfPieces={numParticles} wind={wind} gravity={gravity} run={isRunning} colors={colors} confettiSource={{x: window.innerWidth / 2, y: window.innerHeight / 2}}/>
        </div>
    );
}

export default ConfettiDemo;