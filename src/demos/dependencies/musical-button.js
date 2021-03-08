import * as Tone from "tone";

function MusicalButton({children}) {

    const playMusic = () => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        synth.triggerAttackRelease("d5", "4n", now);
        synth.triggerAttackRelease("e5", "4n", now + 1);
        synth.triggerAttackRelease("d5", "4n", now + 2);
    };


    return <button onClick={playMusic}>{children}</button>
}

export default MusicalButton;