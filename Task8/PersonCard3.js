import React from "react";
import useAge from "./useAge.js";

const PersonCard3 = (props) => {
  const [age, handleAge, handleAge2,handleAge3] = useAge(props.age);
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{age}</h1>
      <button onClick={handleAge}>Increase Age</button>
      <button onClick={handleAge2}>Decrement Age</button>
      <button onClick={handleAge3}>Reset Age</button>
    </div>
  );
};

export default PersonCard3;
