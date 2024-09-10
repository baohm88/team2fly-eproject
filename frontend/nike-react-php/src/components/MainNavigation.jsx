import { NavLink } from "react-router-dom";
import Header from "./Header";

export default function MainNavigation() {
  return (
    <>
      <Header>
        <ul>
          <li>
            <NavLink to="/">LOGO</NavLink>
          </li>
          <li>
            <NavLink to="/featured">New & Featured</NavLink>
          </li>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/kids">Kids</NavLink>
          </li>
          <li>
            <NavLink to="/sale">Sale</NavLink>
          </li>
          <li>
            <NavLink to="/customise">Customise</NavLink>
          </li>
          <li>
            <NavLink to="/sneakers">SNKRS</NavLink>
          </li>
        </ul>
      </Header>
    </>
  );
}
