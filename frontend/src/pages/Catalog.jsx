import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import "./Catalog.css";

export default function Catalog() {
  const [vehicle, setVehicle] = useState([]);
  const { currentUser } = useCurrentUserContext();

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
      <span className="container-title">Vehicle List :</span>
      {currentUser.seller && (
        <Link to="/Form">
          <button className="seller" type="button">
            Add Offer
          </button>
        </Link>
      )}
      <div className="makes-grid">
        {vehicle.map((make) => (
          <div className="vehicle-card" key={`make-${make.id}`}>
            <div className="mobile-home">
              <div className="vehicle-card-left">
                <div
                  style={{
                    backgroundImage: `url("${make.image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    marginTop: "0.8em",
                    width: "100%",
                    height: "50%",
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
            <div className="pc-home">
              <div className="first-box-vehicle">
                <div className="first-box-inside">
                  <div className="title-card2">
                    <span className="title-vehicle2">
                      {make.model.toUpperCase()}
                    </span>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url("${make.image}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      marginTop: "0.8em",
                      width: "100%",
                      height: "50%",
                    }}
                  />
                </div>
                <div className="line" />
                <div className="second-box-inside">lol</div>
                <div className="line" />
                <div className="third-box-inside">lol</div>
              </div>
              <div className="second-box-vehicle">hello</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}