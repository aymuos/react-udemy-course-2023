import { useState} from "react";

function App(){
    {/* arrow function on buttons clicked */}
    {/* these functions are called event handler or callback function that has to pass over a valid event name like onMouseHover , or onClick */}

    const handleClick = () => {

        console.log("Button was Clicked !")
    };
    return (
        <div>
            <button onClick={()=> console.log("Button was clicked 2")}>
                Add Animal
            </button>
        </div>

    )
}   export default App ;