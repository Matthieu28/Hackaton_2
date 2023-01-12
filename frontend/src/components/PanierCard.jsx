import VoitureTest from "../assets/voiture-test.png";

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
    </div>
  );
};

export default PanierCard;
