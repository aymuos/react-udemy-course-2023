import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){

    return (
        <div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                    <p className="subtitle">
                         3 Examples
                    </p>
                </div>
            </section>s
            {/* layout of our cards */ }

            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4"><ProfileCard
                            title="Alexa"
                            handle="@alexa99"
                            img={AlexaImage}
                            textOnNotLoad="Alexa Image"
                            description="Alexa was done by Amazon to mainly aid its business"
                        /></div>
                        <div className="column is-4"><ProfileCard title="Cortana"handle="@corrtunu" img={CortanaImage} textOnNotLoad="Cortana Image" description=" Coratana was made by Microsoft "/></div>
                        <div className="column is-4"><ProfileCard title="Siri"handle="@omgitsSiri" img={SiriImage} textOnNotLoad="Siri Image" description={" Siri is Appl's spyware imo "}/></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default App;