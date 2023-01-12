import BasDePanier from "@components/BasDePanier";
import PanierCard from "../components/PanierCard";

import "./Panier.css";

const Panier = () => {
  return (
    <div className="panier">
      <div className="titrePanier">
        <p>Mon Panier</p>
      </div>
      <div className="carteDeSesMorts">
        <PanierCard />
        <PanierCard />
        <div className="barreDenBas">
          <BasDePanier />
        </div>
      </div>
    </div>
  );
};

export default Panier;
