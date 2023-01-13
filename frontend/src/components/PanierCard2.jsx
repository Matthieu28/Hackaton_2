import "../pages/Panier.css";
import VoitureTest2 from "../assets/voiture2.jpg";

const PanierCard2 = () => {
  return (
    <div className="box">
      <div className="imageDeVoiture">
        <img src={VoitureTest2} alt="voituretarlesouf2" />
      </div>
      <h1 className="nomVoiture"> BUGGATI</h1>
      <div className="allButton">
        <button type="button" className="buttonOne">
          Rent
        </button>
        <button type="button" className="buttonTwo">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PanierCard2;
