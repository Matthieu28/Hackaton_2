import "./Map.css";
import MyMap from "../../components/MyMap";

export default function Map() {
  return (
    <main className="page-map">
      <div className="form-map">
        <h1 className="title-map">Map</h1>
        <p className="para-map">⏬ Discover the stores close by ⏬</p>
        <div id="map">
          <MyMap />
        </div>
      </div>
    </main>
  );
}
