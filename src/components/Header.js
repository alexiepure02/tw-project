import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "../styles.scss";
import { UserContext } from "../UserContextProvider";
import Button from "./Button";

const Header = () => {
  const { authenticated } = useContext(UserContext);

  const navigate = useNavigate();

  const onAuthenticationClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    <>
      {!authenticated ? (
        <div className="header header-unsigned">
          <div className="logo-container">
            <h1 className="logo" onClick={(e) => navigate("/")}>
              Movie Rental
            </h1>
          </div>
          <Button variant="2" onClick={onAuthenticationClick}>
            Autentificare
          </Button>
          <Button variant="2" onClick={onRegisterClick}>
            Inregistrare
          </Button>
        </div>
      ) : (
        <div className="header header-signed">
          <div className="logo-container">
            <h1 className="logo" onClick={(e) => navigate("/")}>
              Movie Rental
            </h1>
          </div>
          <p>burgr</p>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Header;
