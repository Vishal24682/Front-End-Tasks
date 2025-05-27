import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting";


const App = () => {
    
    return (
        <div>
            <Greeting name="Vishal"/>
        </div>
      
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);