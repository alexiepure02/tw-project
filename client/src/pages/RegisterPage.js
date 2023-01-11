import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";

const RegisterPage = () => {
  const location = useLocation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(
    location.state ? location.state.email : ""
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onContinueClick = () => {
    console.log("auth");
    console.log(firstName, lastName, email, username, password, password2);
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="register">
      <h1 className="title">Creează un cont</h1>
      <form className="register-form">
        <div className="full-name">
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Prenume"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Nume"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Adresă de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <PasswordInput
          id="password2"
          name="password2"
          placeholder="Confirmă parola"
          password={password2}
          setPassword={setPassword2}
        />
        <Button variant="1" onClick={onContinueClick}>
          Continuă
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
