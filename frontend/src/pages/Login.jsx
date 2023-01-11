import { useState } from "react";
import axios from "axios";
import { useCurrentUserContext } from "@contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";

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
          navigate("/makes");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          id="email"
          required
          placeholder="example@mail.com"
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
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
