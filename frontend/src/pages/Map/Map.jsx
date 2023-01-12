import "./Map.css";
import MyMap from "../../components/MyMap";

export default function Map() {
  return (
    <main className="page-map">
      <div className="form-map">
        <h1 className="title-map">Map</h1>
        <p className="para-map">
          Découvrez les magasins proches de chez vous. Cliquez ci-dessous pour
          voir leurs horaires d'ouverture.
        </p>
        <div id="map">
          <MyMap />
        </div>
        <img
          className="picture-map"
          src="./src/assets/map.png"
          alt="gogolemap"
        />
      </div>
    </main>
  );
}
