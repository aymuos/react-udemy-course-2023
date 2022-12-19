import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){

    return (
        <div>
            <div>Personal Digital Assistants</div>

            <img src={AlexaImage} />
            <img src={SiriImage} />
            // for hosted images use normal html images , same for fonts

            <ProfileCard title="Alexa"handle="@alexa99" />
            <ProfileCard title="Cortana"handle="@corrtunu" />
            <ProfileCard title="Siri"handle="@omgitsSiri" />
        </div>
    );
}
export default App;