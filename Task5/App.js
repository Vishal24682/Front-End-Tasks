import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import NameInput from "./NameInput";
import DisplayName from "./DisplayName";

const App = () => {
    const [name,setName] = useState("");
     
    return(
        <div>
        <NameInput nameSetter={setName} info={name}/>
        <DisplayName info={name}/>
        </div>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);