import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){

    return (
        <div>
            <div className="has-text-centered">Personal Digital Assistants</div>
            {/* layout of our cards */ }

            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4"><ProfileCard title="Alexa"handle="@alexa99" img={AlexaImage} textOnNotLoad="Alexa Image"/></div>
                        <div className="column is-4"><ProfileCard title="Cortana"handle="@corrtunu" img={CortanaImage} textOnNotLoad="Cortana Image" /></div>
                        <div className="column is-4"><ProfileCard title="Siri"handle="@omgitsSiri" img={SiriImage} textOnNotLoad="Siri Image"/></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default App;