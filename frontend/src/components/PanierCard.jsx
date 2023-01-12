import VoitureTest from "../assets/voiture-test.png";

const PanierCard = () => {
  return (
    <div className="box">
      <img src={VoitureTest} alt="voituretarlesouf" className="imageTest" />
      <h1 className="nomVoiture">
        {" "}
        NAME OF THE VOITURE QUI EST TROP TARD LES OUFS
      </h1>
    </div>
  );
};

export default PanierCard;