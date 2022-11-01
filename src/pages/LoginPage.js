import React, { useState } from "react";
import Button from "../components/Button";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const onContinueClick = () => {
    console.log("auth");
    console.log(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login">
      <h1 className="title">Autentificare</h1>
      <form className="login-form">
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="1" onClick={onContinueClick}>
          Continua
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
