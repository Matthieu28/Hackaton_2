import { NavLink } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import "./NavBar.css";

export default function NavBar() {
  const { currentUser } = useCurrentUserContext();

  return (
    <ul className="navbar">
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      {currentUser.id && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/makes"
          >
            Makes
          </NavLink>
        </li>
      )}
    </ul>
  );
}
