import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const onAuthenticationClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    console.log(email);
    navigate("/register");
  };

  return (
    <div className="home">
      <h1 className="title">
        Cu Movie Rental poti sa te bucuri de filmele tale preferate la tine
        acasa
      </h1>
      <form className="email-form">
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <Button variant="1" onClick={onRegisterClick}>
          Inregistrare
        </Button>
      </form>
      <p>sau</p>
      <Button variant="1" onClick={onAuthenticationClick}>
        Continua cu un cont existent..
      </Button>
    </div>
  );
};

export default HomePage;
