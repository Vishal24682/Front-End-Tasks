import react, { useState } from "react";
import ReactDOM from "react-dom/client";


const App = () => {
  
  const [myname, setMyName] = useState('');
  const [myage, setMyAge] = useState('');
  const [myemail, setMyEmail] = useState('');
  

  const handleName = (e) =>{
      setMyName(e.target.value)
  }
  const handleEmail = (e) => {
    setMyEmail(e.target.value);
  };
  const handleAge = (e) => {
    setMyAge(e.target.value)
  }


  

    return (
      <div className="div">
        <form className="form">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleName}
          />

          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleEmail}
          />

          <label htmlFor="age">Age : </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            onChange={handleAge}
          />
          <input type="submit" value="submit" />
        </form>
        <h1>{myname}</h1>
        <h1>{myemail}</h1>
        <h1>{myage}</h1>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);