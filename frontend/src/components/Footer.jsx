import "./Footer.css";
import miniLogo from "../assets/mini-logo.png";

const Footer = () => {
  return (
    <footer className="footer-overall">
      <img src={miniLogo} alt="" />
      <div className="footer-txt">
        <p>
          © 2022-2023 Joryan, Théo, Matthieu, Dylan, Valentin, Enzo,. Tout
          droits réservés. Aucune revendication de propriété du droit d'auteur
          n'est faite sur le sous-jacent matériaux Merci de votre visite !
        </p>
      </div>
    </footer>
  );
};

export default Footer;
