import React, { useState } from 'react';


 
const App = () => {
    const state = useState();
    // console.log(state);

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count+1);
        //console.log("clicked " + count++);
    };
    return(
        <>
            <h1> {count} </h1>
            <buttom onClick={IncNum}> Click Me </buttom>
        </>
    );
};

export default App;


css part
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Oswald:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Oswald:wght@200&family=Source+Sans+Pro:wght@200&display=swap');
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: #d2dbdd;
}

div {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

buttom {
    padding: 15px 20px;
    background: #9b59b6;
    color: white;
    border: 2px solid #ecf0f1;
    outline: none;
    border-radius: 5px;
    text-transform: uppercase;
}



//challenge #6
index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


App.jsx

import React, { useState } from 'react';


const App = () => {
    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }

    return (
        <>
            <h1> {ctime} </h1>
            <button onClick={UpdateTime}> GET TIME </button>
        </>

    );
};

export default App;


index.css
import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Oswald:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Oswald:wght@200&family=Source+Sans+Pro:wght@200&display=swap');
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: #d2dbdd;
}
div {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

buttom {
    padding: 12px 20px;
    background: #9b59b6;
    color: white;
    border: 2px solid #ecf0f1;
    outline: none;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
}

//mini project on digital clock
index.jsx

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


App.jsx

import React, { useState } from 'react';

const App = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    };

    setInterval(UpdateTime,1000)
    return(
        <>
            <h1> {ctime} </h1>
            
        </>
    );
};
export default App;


//////////////////////////events///////////////////////////////////////////////////////////////////////