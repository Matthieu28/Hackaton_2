import VoitureTest from "../assets/voiture-test.png";
import Heart from "../assets/heart-regular.svg";
import Cloche from "../assets/bell-regular.svg";

const PanierCard = () => {
  return (
    <div className="box">
      <div className="imageDeVoiture">
        <img src={VoitureTest} alt="voituretarlesouf" />
      </div>
      <h1 className="nomVoiture"> PORSCHE</h1>
      <div className="allButton">
        <button type="button" className="buttonOne">
          Louer
        </button>
        <button type="button" className="buttonTwo">
          Supprimer
        </button>
      </div>
      <footer className="barreDenBas">
        <img src={Heart} alt="heart" />
        <img src={Cloche} alt="bell" />
      </footer>
    </div>
  );
};

export default PanierCard;
