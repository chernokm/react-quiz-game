import {useState} from "react";

function ClickButton() {




    const [numClicks, setNumClicks] = useState(0);

    const onButtonClick = () => {
        setNumClicks(numClicks + 1);
    };

    const clicksEmoji = "👍".repeat(numClicks);
    // let text = ``;
    // if (numClicks === 0) text = "You haven't clicked yet. Click me!";
    // else text = `You've clicked: ${clicksEmoji}`;

    const text = numClicks === 0 ? "You haven't clicked yet. Click me!" : `You've clicked: ${clicksEmoji}`

    const buttonStyle = {
        width: "10rem",
        transform: `rotate(${numClicks * 25}deg)`,
        transistion: "all 0.2s",
    }

    return <button style={buttonStyle} onClick={onButtonClick}>{text}</button>
}

export default ClickButton;