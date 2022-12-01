//5 step process
// 1. Import react and react dom libraries
// 2. Get a reference to the div with ID root
// 3. Tell React to take control of that element
// 4. Create a component
// 5. Show the component in the screen


import React from 'react';
import ReactDOM from 'react-dom/client';

// React is the library that defines what a component is and how multiple components work together
// React DOM is the library that knows how to get a component to show up in the browser and show in the browser , the target was to use react native in mobile devices

//2
const el = document.getElementById('root');
//3
const root = ReactDOM.createRoot(el);

//4
function App() {
    let message = 'Bye there!'
    if (Math.random() > 0.5){
        message= 'hello there !';

    }
   // we can display the javascript variables using the curly braces
    // if we get to print the objects inside the react object it will show error
    const date = new Date();
    const name = 'Aymuos';
    const time = date.toLocaleTimeString();
    //return <h1>{message}</h1>;
    //return <h1>{ new Date().toLocaleTimeString()}</h1>;  --> returning complex stuffs inside the return statement

    // how to return multiple objects from the statement

    return (
        <h1>Hi My name is {name} and the time is {time}</h1>
    );
    // jsx is compiled by Babel to js that is returned to the HTML

    //typical component layout is

    // code to compute values we want to show in our jsx  and then the return type is content we want this component to show

}

// 5

root.render(<App />);

