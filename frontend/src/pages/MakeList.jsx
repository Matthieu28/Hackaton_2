import { useState, useEffect } from "react";
import axios from "axios";

import "./MakeList.css";

export default function MakeList() {
  const [makes, setMakes] = useState([]);

  const getMakes = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/makes`,
        { withCredentials: true }
      );
      setMakes(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMakes();
  }, []);

  return (
    <section id="makes-container">
      <h2>Make List</h2>
      <div className="makes-grid">
        {makes.map((make) => (
          <figure key={`make-${make.id}`}>
            <img src={make.logo} alt={make.name} />
            <figcaption>{make.name.toUpperCase()}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
