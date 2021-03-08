import AlertButton from "./props/alert-button";
import ChatMessage from "./props/chat-message";
import SpeakButton from "./props/speak-button";
import WelcomeMessage from "./props/welcome-message";
import SocialPost from "./props/social-post";
import ClickButton from "./state/click-button";
import SpeakForm from "./state/speak-form";
import CustomIncrement from "./state/custom-increment";
import MusicalButton from "./dependencies/musical-button";
import Confetti from "./dependencies/confetti-demo";
import Todos from "./arrays/todos";

function DemosPage() {
    return (
        <main>
            <h1>My First React App</h1>
            <h1>This change was for github</h1>

            <h2>Rendering Arrays</h2>
            <Todos></Todos>

            <h2>Confetti Demo</h2>
            <Confetti></Confetti>

            <h2>Tone.js Music</h2>
            <MusicalButton>Play Some Beats</MusicalButton>

            <h2>Custon Increment</h2>
            <CustomIncrement></CustomIncrement>

            <h2>Speak Form</h2>
            <SpeakForm></SpeakForm>


            <h2>Stateful Buttons</h2>
            <ClickButton></ClickButton>


            <h2>Welcome</h2>
            <WelcomeMessage name="Sora" greeting="Hello"/>
  
            <h2>Buttons</h2>
            <SpeakButton message="Hello there!" rate={1} pitch={1}></SpeakButton>
            <AlertButton alertMessage="Hi there"></AlertButton>
            <AlertButton buttonText="alert me!" alertMessage="you have been alerted!"></AlertButton>
  
            <h2>Chat</h2>
            <ChatMessage message="How's react going?" userName="Sora" date="02/01/21"></ChatMessage>
            <ChatMessage message="I believe it's going well..." userName="Shiro" date="02/02/21"></ChatMessage>

            <h2>Social Media</h2>
            <SocialPost content="My first time posting..." userName="Sora"></SocialPost>
            <SocialPost content="I figured it out!" userName="Shiro" numLikes="10" numThumbsUp="2" numSparkles="5"></SocialPost>

        </main>
    );
}

export default DemosPage;