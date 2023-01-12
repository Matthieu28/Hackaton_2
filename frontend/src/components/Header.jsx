import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.png";
// import Logo2 from "../assets/logo2.png";
function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div>
      <section id="telnav">
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
          <ul className="navbar__links slideInDown  ">
            <li className="navbar__item">
              <Link
                to="/Catalog"
                className="navbar__link"
                onClick={handleShowLinks}
              >
                Catalog
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/Map"
                className="navbar__link"
                onClick={handleShowLinks}
              >
                Map
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/Panier"
                className="navbar__link"
                onClick={handleShowLinks}
              >
                Panier
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="navbar__burger"
            onClick={handleShowLinks}
          >
            <span className="burger__bar"> </span>
          </button>
        </nav>
      </section>
      <section id="pcnav">
        <header>
          <div className="container-href">
            <ul id="li">
              <li>
                <Link to="/Catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/Map">Map</Link>
              </li>
              <li>
                <Link to="/Panier">Panier</Link>
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
}
export default Header;
