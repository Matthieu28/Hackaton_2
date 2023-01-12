import Heart from "../assets/heart-regular.svg";
import Cloche from "../assets/bell-regular.svg";
import "../pages/Panier.css";

const BasDePanier = () => {
  return (
    <div>
      <div className="barreDenBas">
        <img src={Heart} alt="heart" />
        <img src={Cloche} alt="bell" />
      </div>
    </div>
  );
};

export default BasDePanier;
