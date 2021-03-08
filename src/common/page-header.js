import { Link } from "react-router-dom";
import "./page-header.css";


function PageHeader() {
    return (
        <header className="page-header">
            {/* <span>Welcome</span> */}
            <nav className="page-header__nav">
            <Link to="/">Home</Link> | <Link to="/quiz">Quiz</Link> | <Link to="/about">About</Link> | <Link to="/demos">Demo</Link>
            </nav>
        </header>
    );
}

export default PageHeader;