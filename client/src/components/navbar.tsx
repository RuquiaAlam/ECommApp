import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarTitle">
        <h1>ECommerce Shop</h1>
      </div>
      <div className="navbarLinks">
        <Link to="/">Shop</Link>
        <Link to="/purchased-items">Purchases</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/auth">Auth</Link>
      </div>
    </div>
  );
};
