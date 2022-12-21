import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){

    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa"handle="@alexa99" img={AlexaImage} textOnNotLoad="Alexa Image"/>
            <ProfileCard title="Cortana"handle="@corrtunu" img={CortanaImage} textOnNotLoad="Cortana Image" />
            <ProfileCard title="Siri"handle="@omgitsSiri" img={SiriImage} textOnNotLoad="Siri Image"/>

        </div>
    );
}
export default App;