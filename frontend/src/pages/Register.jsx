import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import "./Login.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [seller, setSeller] = useState("");
  const [customer, setCustomer] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const checkRole = () => {
    if (status === "customer") {
      setCustomer(1);
      setSeller(0);
    } else {
      setCustomer(0);
      setSeller(1);
    }
  };

  const { setCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      alert("You must provide an email and a password");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/`,
          {
            name,
            email,
            password,
            customer,
            seller,
          },
          { withCredentials: true }
        )
        .then(({ data }) => {
          setCurrentUser(data);
          navigate("/home");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:{" "}
        <input
          type="name"
          id="name"
          required
          placeholder="example@mail.com"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          id="email"
          required
          placeholder="Your Email"
          value={email}
          onChange={handleChangeEmail}
        />
      </label>
      <label htmlFor="password">
        Password:{" "}
        <input
          type="password"
          id="password"
          required
          placeholder="Your password"
          value={password}
          onChange={handleChangePassword}
        />
        <label htmlFor="customer">customer</label>
        <input
          type="radio"
          id="customer"
          name="status"
          value="customer"
          checked={status === "customer"}
          onChange={handleChangeStatus}
        />
        <label htmlFor="seller">seller</label>
        <input
          type="radio"
          id="seller"
          name="status"
          value="seller"
          checked={status === "seller"}
          onChange={handleChangeStatus}
        />
      </label>

      <button type="submit" onClick={checkRole}>
        Register !
      </button>
    </form>
  );
}
