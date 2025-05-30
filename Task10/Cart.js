import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart } = useOutletContext();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: {total}Rs</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
