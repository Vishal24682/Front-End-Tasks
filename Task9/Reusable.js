import { useState } from "react";
const Reusable = ({isOpen, onClose}) => {
    
     const Func = ()=>{
        if(isOpen===true){
            return <h1>The Modal is Visible</h1>
        }
        else{
            return <h1>Oops</h1>
        }
     }
   
    
    return(
        <div>
        {Func()}
            <button onClick={onClose}>Hide The Modal</button>
        </div>
    )
        
    
}

export default Reusable;