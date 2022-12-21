//function ProfileCard(props){
function ProfileCard({title ,handle , img , textOnNotLoad}){
    console.log({title,handle})
    // const title= props.title;
    // const handle = props.handle;
    // it will receive the first js props object

    //deconstructing

    //const {title , handle} = props ;
    // this is equal to the above line 3 and 4

    // its often we don't care about the whole props object

    return (
        <div>
            <img src ={img} alt={textOnNotLoad} />
            <div>Title is {title} </div>
            <div>Handle is {handle} </div>

        </div>
    );
}

export default ProfileCard;