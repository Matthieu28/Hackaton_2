import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [vehicle, setVehicle] = useState([]);

  const getVehicle = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/vehicles`,
        { withCredentials: true }
      );
      setVehicle(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return (
    <div className="container-home">
      <section>
        <span className="container-title">Vehicle List :</span>
        <div className="makes-grid">
          {vehicle.map((make) => (
            <div className="vehicle-card" key={`make-${make.id}`}>
              <div className="vehicle-card-left">
                <div
                  style={{
                    backgroundImage: `url("${make.image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "10em",
                    height: "7em",
                    borderRadius: "15px",
                  }}
                />
                <div className="title-card">
                  <span className="title-vehicle">
                    {make.model.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="vehicle-card-right">
                <div className="info-vehicle">{make.fiche}</div>
                <button type="button" className="button-card-info">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
