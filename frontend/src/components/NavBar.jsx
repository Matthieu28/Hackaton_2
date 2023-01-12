import profil from "@assets/profil.png";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";

import "./NavBar.css";

export default function NavBar() {
  const { currentUser } = useCurrentUserContext();

  return (
    <ul className="navbar">
      <h2>Wild CarZzz</h2>
      <div className="bottom-nav">
        <p>
          <img src={profil} alt="Logo user" width="30px" height="30px" />
          {currentUser.name}
        </p>
        <Header />
      </div>
    </ul>
  );
}
