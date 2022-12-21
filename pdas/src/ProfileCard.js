//function ProfileCard(props){
function ProfileCard({title ,handle , img , textOnNotLoad , description}){
    console.log({title,handle})
    // const title= props.title;
    // const handle = props.handle;
    // it will receive the first js props object

    //deconstructing

    //const {title , handle} = props ;
    // this is equal to the above line 3 and 4

    // its often we don't care about the whole props object

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={img} alt={textOnNotLoad} />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title} </p>
                    <p className="subtitle is-6">{handle} </p>
                    <div className="content">{description}</div>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;