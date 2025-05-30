import react, { useState } from "react";
import ReactDOM from "react-dom/client";


const App = () => {
    const[count,setCount] = useState(0);
    const decrement = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCount(count + 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
      <div>
        <button className="decrement" onClick={decrement}>Decrement</button>
        <button className="increment" onClick={increment}>Increment</button>
        <button className="reset" onClick={reset}>Reset</button>
        <h1 className="counter">{count}</h1>
      </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
