import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import "./Home.css";

export default function Home() {
  const [vehicle, setVehicle] = useState([]);
  const { currentUser } = useCurrentUserContext();
  const [marques, setMarques] = useState([]);
  const [filter, setFilter] = useState("");
  const [vtypes, setVtypes] = useState([]);

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

  const getMarque = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/makes`,
        { withCredentials: true }
      );
      setMarques(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMarque();
  }, []);

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    getVehicle();
  }, []);

  const getVtype = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/vtypes`,
        { withCredentials: true }
      );
      setVtypes(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getVtype();
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

      <select id="cupcake-select" value={filter} onChange={handleSearch}>
        <option value="">---</option>
        {marques.map((marque) => (
          <option value={marque.id} key={marque.id}>
            {marque.name}
          </option>
        ))}
      </select>

      <div className="makes-grid">
        {vehicle
          .filter(
            (search) => filter === "" || search.makeId === parseInt(filter, 10)
          )
          .map((make) => (
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
                        height: "80%",
                      }}
                    />
                  </div>
                  <div className="line" />
                  <div className="second-box-inside">
                    <div className="fiche-box-height">{make.fiche}</div>
                    <div className="more-box-height">
                      <span>Kilométrage : </span>
                      {make.kilometrage}
                      <br />
                      <span>Nombre de place : </span>
                      {make.place}
                      <br />
                      <span>Disponibilité : </span>
                      {make.datedispo.slice(0, 10)}
                    </div>
                  </div>
                  <div className="line" />
                  <div className="third-box-inside">
                    {make.lieu}
                    {make.vtypeId}
                    {vtypes.map((vtype) => (
                      <div className="test" key={`make-${vtype.id}`}>
                        {vtype.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="second-box-vehicle">
                  <button type="button" className="button_addToCart">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
