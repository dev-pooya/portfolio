import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <ul className="items">
          <li className="item">
            <NavLink to="/" activeClassName="selected" exact>
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/skills" activeClassName="selected" exact>
              Skills
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/portfolio" activeClassName="selected" exact>
              Portfolio
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/contact" activeClassName="selected" exact>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
