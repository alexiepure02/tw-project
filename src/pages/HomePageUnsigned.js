import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePageUnsigned = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const onAuthenticationClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    console.log(email);
    navigate("/register", {
      state: { email: email },
    });
  };

  return (
    <div className="home-unsigned">
      <h1 className="title-desktop">
        Cu Movie Rental poti sa te bucuri de filmele tale preferate la tine
        acasa
      </h1>
      <h1 className="title-mobile">Movie Rental</h1>
      <form className="email-form">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Introdu email-ul aici.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <Button variant="1" onClick={onRegisterClick}>
          Înregistrare
        </Button>
      </form>
      <p>sau</p>
      <Button variant="1" onClick={onAuthenticationClick}>
        Continuă cu un cont existent..
      </Button>
    </div>
  );
};

export default HomePageUnsigned;
