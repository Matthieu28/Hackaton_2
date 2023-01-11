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
        <h2>Make List</h2>
        <div className="makes-grid">
          {vehicle.map((make) => (
            <figure key={`make-${make.id}`}>
              <img src={make.image} alt={make.name} />
              <figcaption>{make.name.toUpperCase()}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
