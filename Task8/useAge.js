
 import { useState } from "react";
 const useAge = (Age) => {
    const [age, setAge] = useState(Age);
    const handleAge = () => {
      setAge(age + 1);
    };
    const handleAge2 = () => {
      setAge(age - 1);
    };
    const handleAge3 = () => {
      setAge(Age);
    }; 
    return [age, handleAge, handleAge2, handleAge3];
 }

 export default useAge;
