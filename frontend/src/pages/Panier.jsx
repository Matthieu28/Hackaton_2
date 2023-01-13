import PanierCard from "../components/PanierCard";
import PanierCard2 from "../components/PanierCard2";

import "./Panier.css";

const Panier = () => {
  return (
    <div className="panier">
      <div className="titrePanier">
        <p>My Shopping</p>
      </div>
      <div className="carteDeSesMorts">
        <PanierCard />
        <PanierCard2 />
        <PanierCard2 />
        <PanierCard />
      </div>
    </div>
  );
};

export default Panier;
