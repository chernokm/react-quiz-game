import "./page-footer.css";

function PageFooter() {
    const year = new Date().getFullYear();
    return <footer className="page-footer">© Mackenzie Chernok, {year}</footer>;
}

export default PageFooter;