import profil from "@assets/profil.png";
import logo from "@assets/logo-wildCarZzz.png";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";

import "./NavBar.css";

export default function NavBar() {
  const { currentUser } = useCurrentUserContext();

  return (
    <div className="navbar">
      <div className="bottom-nav">
        <img src={logo} alt="logo" id="logo-car" />
        <Header />
      </div>
      <ul className="navbar-user">
        <img src={profil} alt="Logo user" width="30px" height="30px" />
        <p>
          Welcome,
          <p />
          {currentUser.name}
        </p>
      </ul>
    </div>
  );
}
