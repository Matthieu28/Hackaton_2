import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const { setCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("You must provide an email and a password");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
          {
            name,
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
      <h1>Login</h1>
      <p className="sign-continue">Sign to continue.</p>
      <div className="inputs">
        <label htmlFor="name" className="name">
          Name:{" "}
          <input
            type="name"
            id="name"
            required
            placeholder="User"
            value={name}
            onChange={handleChangeName}
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
      <p className="forget">Forgot Password ?</p>
      <div>
        <Link to="/Register" className="sign">
          Sign up !
        </Link>
      </div>
    </form>
  );
}
