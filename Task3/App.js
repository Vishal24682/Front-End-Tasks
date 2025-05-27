import react, { useState } from "react";
import ReactDOM from "react-dom/client";


const App = () => {
    const [msg,setMsg] = useState('');
    const handleClick = () => {
        setMsg("Secret Message");
    }

  return (
    <div>
    <button className="button" onClick={handleClick}>Show Message</button>
    <h1>{msg}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
