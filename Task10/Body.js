import Data from "./Data"
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
const Body = () => {
    const { addToCart } = useOutletContext();
    return(
        <div className="bodydiv">
            {Data.map(item=>{
                return (
                  <li key={item.id}>
                    {item.name} - Rs-{item.price}
                    <button className="button" onClick={() => addToCart(item)}>
                      Add Items to Cart
                    </button>
                  </li>
                ); })
           
           }
        </div>
    )
}

export default Body;