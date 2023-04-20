import { NavLink } from "react-router-dom";
import pizza from "./pizza.png";
import cart from "./cart.png";

function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav className="header">
        <ul className="nav-links">
          <div className="pizza-icon-container">
            <img src={pizza} alt="" />
            <li>
              <NavLink className={setActiveClass} end to="/">
                Pizzería Mamma Mía!
              </NavLink>
            </li>
          </div>
          <div className="cart-container">
            <img src={cart} alt="" />
            <li>
              <NavLink end to="/carrito">
                Ir al carro de compras
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
