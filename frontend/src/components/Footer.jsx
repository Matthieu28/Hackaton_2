import "./Footer.css";
import miniLogo from "../assets/mini-logo.png"

const Footer = () => {
  return (
    <footer className="footer-overall">
        <img src={miniLogo} alt="" />
      <div className="footer-txt">
        <p>
          © 2022-2023 Joryan, Théo, Matthieu, Dylan, Valentin, Enzo,. All Rights
          Reserved. No claim to copyright ownership is made to underlying
          materials Thank you for your visit !
        </p>
      </div>
    </footer>
  );
};

export default Footer;
