import { useState} from "react";

function App(){
    {/* arrow function on buttons clicked */}
    {/* these functions are called event handler or callback function that has to pass over a valid event name like onMouseHover , or onClick */}
    const [count,setCount] = useState(0);
    {/*usestate value is the default value */}
    const handleClick = () => {
        {/* inside the event handler we update the state */}
        setCount(count+1);
    };
    return (
        <div>
            <button onClick={handleClick}>
                Add Animal
            </button>
            <div> Number of Animals : {count}</div>
        </div>

    )
}   export default App ;