import { NavLink } from "react-router-dom";
import Header from "./Header";

export default function MainNavigation() {
  return (
    <>
      <Header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </Header>
    </>
  );
}
