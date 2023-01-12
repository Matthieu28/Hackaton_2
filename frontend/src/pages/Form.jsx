import "./Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    kilometrage: "",
    fiche: "",
    lieu: "",
    datedispo: "",
    place: "",
    model: "",
    makeId: "",
    vtypeId: "",
    image: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData) {
      // eslint-disable-next-line no-alert
      alert("You must provide all the information");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/vehicles/`,
          {
            ...formData,
          },
          { withCredentials: true }
        )
        .then(() => {
          navigate("/home");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <form className="form-vehicles" onSubmit={handleSubmit}>
      <label>
        kilometrage:
        <input
          className="input-form"
          type="number"
          name="kilometrage"
          value={formData.kilometrage}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        fiche:
        <input
          className="input-form"
          type="text"
          name="fiche"
          value={formData.fiche}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        lieu:
        <input
          className="input-form"
          type="text"
          name="lieu"
          value={formData.lieu}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        date dispo:
        <input
          className="input-form"
          type="text"
          name="datedispo"
          value={formData.datedispo}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        place:
        <input
          className="input-form"
          type="number"
          name="place"
          value={formData.place}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        modele:
        <input
          className="input-form"
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        makeId:
        <input
          className="input-form"
          type="number"
          name="makeId"
          value={formData.makeId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        vtypeId:
        <input
          className="input-form"
          type="number"
          name="vtypeId"
          value={formData.vtypeId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        image:
        <input
          className="input-form"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
