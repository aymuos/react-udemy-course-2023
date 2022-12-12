import React from 'react';
import ReactDOM from "react-dom/client";


function App(){
    const inputType = "number"
    const minValue = 5 ;
    return (
        <input type={inputType} min={minValue} />
    );
}