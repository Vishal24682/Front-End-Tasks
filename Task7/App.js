import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo";


const App = () => {
  return (
      <div className="div">
      <Todo/>
       
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);