import ProfileCard from "./ProfileCard";

function App(){

    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa"handle="@alexa99" />
            <ProfileCard title="Cortana"handle="@corrtunu" />
            <ProfileCard title="Siri"handle="@omgitsSiri" />
        </div>
    );
}
export default App;