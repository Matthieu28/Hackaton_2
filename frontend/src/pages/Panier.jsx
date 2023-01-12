import PanierCard from "../components/PanierCard";

import "./Panier.css";

const Panier = () => {
  return (
    <div className="panier">
      <div className="titrePanier">
        <p>Mon Panier</p>
      </div>
      <PanierCard />
    </div>
  );
};

export default Panier;