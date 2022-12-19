function ProfileCard(props){
    // it will receive the first js props object
    return (
        <div>
            <div>Title is {props.title} </div>
            <div>Handle is {props.handle} </div>
        </div>
    );
}

export default ProfileCard;