import React from "react";
import ReactDOM from "react-dom/client";
import Reusable from "./Reusable";
import { useState } from "react";


const App = () => {
    const [isOpen, setIsOpen] = useState(true);
    const onClose = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div>
            <Reusable isOpen={isOpen} onClose={onClose} />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);