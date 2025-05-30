import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import Cart from "./Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


   
    

const App10 = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
    return(
        <div>
        <Header cart={cart}/>
        <Outlet context={{cart, addToCart}}/>
        </div>
    )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App10/>,
    children: [
      {
        
          path: "/",
          element: <Body />,
        
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>  );