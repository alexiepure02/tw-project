import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { login } from "../functions/authentication";

import PasswordInput from "../components/PasswordInput";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onContinueClick = async () => {
    try {
      await login(username, password);
      navigate("/movies");
    } catch (err) {
      console.log(err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <h1 className="title">Autentificare</h1>
      <form className="login-form">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nume de utilizator"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInput
          id="password"
          name="password"
          placeholder="Parolă"
          password={password}
          setPassword={setPassword}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button variant="1" onClick={onContinueClick}>
          Continuă
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
