import react from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";


const App = () => {
    const[items,setItems] = useState('');
    const[itemsList,setItemsList] = useState([]);
  return (
    <div>
      
        {itemsList.map((item, index) => {
         return <li key={index}>{item}</li>;
        })}
      

      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <button className="button" onClick={() => setItemsList([...itemsList, items])}>Add</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
