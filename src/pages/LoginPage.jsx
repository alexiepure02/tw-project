import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { UserContext } from "../UserContextProvider";

const LoginPage = () => {
  const { setUserContext } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onContinueClick = () => {
    console.log(username, password);
    setUsername("");
    setPassword("");
    setUserContext({
      id: 1,
      name: "Alex",
    });
    navigate('/');
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
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="1" onClick={onContinueClick}>
          Continuă
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
