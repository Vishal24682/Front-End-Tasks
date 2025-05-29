import react from "react";
import ReactDOM from "react-dom/client";
import PersonCard1 from "./PersonCard1";


const App = () => {
    return (
      <div>
        <PersonCard1 name="Vishal" age={25} />
        <PersonCard1 name="Arjun" age={30} />
        <PersonCard1 name="Ram" age={28} />
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);