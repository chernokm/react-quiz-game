import image from "../images/hades-cover.jpg";

function AboutPage() {
    return (
        <main>
    <h1>About Me</h1>
    <hr />
    <h2>Mackenzie Chernok</h2>
    <p>We're learing HTML <em>together</em></p>

    <p>Some things I've been doing lately:
        <ul>
            <li>Started to play Hades for the first time</li>
            <li>Started working as an editor on a wiki for a game I play</li>
        </ul>
    </p>

    <p>Some languages I am going to be using:
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>TS</li>
            <li>React</li>
        </ol>
    </p>

    <p>An app I use daily is <a href="https://discord.com/" target="_blank" title="Software recommendation">Discord</a></p>

    <hr></hr>
    <h2>Here is the cover for hades:</h2>
    <img id="hades-image" src={image} alt="Poster from hades" width="150" height="250"/>
    <p>Here is a link to the developers <a href="https://www.supergiantgames.com/games/hades/" target="_self" title="Hades Game">site</a></p>

    <hr></hr>
    <h2>Here is one of my favorite quotes from my favorite anime:</h2>
    <blockquote cite="https://fairytail.fandom.com/wiki/Makarov_Dreyar">
    "There is great value in the time spent in ones own company. But a lifetime of total
    isolation is a fate no one should endure".
    </blockquote>
</main>
    );
}

export default AboutPage;