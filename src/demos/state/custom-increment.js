import {useState} from "react";

function CustomIncrement() {

    const [currentValue, setCurrentValue] = useState(0);
    const [increment, setIncrement] = useState(1);

    const onButtonClick = () => {
        setCurrentValue(currentValue + increment);
    };

    const onIncrementChange = (event) => {
        const newIncrement = parseFloat(event.target.value);
        setIncrement(newIncrement);

    };

    const value = currentValue === 0 ? 0 : `${currentValue}`

    return (
        <div>
            <div>
                <label>The current value is: {value}</label>
            </div>
            <div>
                <label>Current Increment: {increment}</label>
            </div>
            <button onClick={onButtonClick}>Add {increment}</button>
            <div>
            <label>Increment: </label>
            <input id="increment" type="range" min="-100" max="100" value={increment} onChange={onIncrementChange}/>
            </div>
        </div>
    );
}

export default CustomIncrement;