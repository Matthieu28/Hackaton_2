import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import "./Register.css";

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
    if (!email || !password || !name || !status) {
      // eslint-disable-next-line no-alert
      alert("You must provide all the information");
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
          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <div className="formulaire">
        <h1>Create new account</h1>
        <p className="sign-register">Already Registered? Log in here.</p>
        <label htmlFor="name" className="name">
          Name:{" "}
          <input
            type="name"
            id="name"
            required
            placeholder="Your user"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label htmlFor="email" className="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            required
            placeholder="Your email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="password" className="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            required
            placeholder="Your password"
            value={password}
            onChange={handleChangePassword}
          />
          <div className="case">
            <label htmlFor="customer" className="customer">
              customer
            </label>
            <input
              type="radio"
              id="customer"
              name="status"
              value="customer"
              checked={status === "customer"}
              onChange={handleChangeStatus}
            />
            <label htmlFor="seller" className="seller">
              seller
            </label>
            <input
              type="radio"
              id="seller"
              name="status"
              value="seller"
              checked={status === "seller"}
              onChange={handleChangeStatus}
            />
          </div>
        </label>
      </div>

      <button type="submit" className="sign-up" onClick={checkRole}>
        Sign up
      </button>

      <p className="account">Already have account ?</p>
      <div>
        <Link to="/" className="log">
          Login !
        </Link>
      </div>
    </form>
  );
}
