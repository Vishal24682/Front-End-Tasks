import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <div>
      <Link to="/cart">Cart ({cart.length})</Link>
    </div>
  );
};

export default Header;
