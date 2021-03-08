import "./alert-button.css";

function AlertButton({buttonText = "Alert", alertMessage}) {

    const a = () => {
        alert(alertMessage);
    }
    return <button className="alert-button" onClick={a}>{buttonText}</button>;
}

export default AlertButton;