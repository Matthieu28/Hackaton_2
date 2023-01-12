import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const { setCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("You must provide an email and a password");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
          {
            email,
            password,
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
      <h1 className="title-log">Login</h1>
      <p className="sign-continue">Sign to continue.</p>
      <div className="inputs">
        <label htmlFor="name" className="name">
          Name:{" "}
          <input
            type="name"
            id="email"
            required
            placeholder="Your user"
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
        </label>
        <button type="submit" className="log-in">
          Log in
        </button>
      </div>
      <div>
        <Link to="/Register" className="sign">
          Sign up !
        </Link>
      </div>
    </form>
  );
}
