import { Outlet, useNavigate } from "react-router-dom";

import "../styles.scss";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  const onAuthenticationClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    <body>
      <div className="header">
        <div className="logo" onClick={(e) => navigate("/")}>
          <h1>Movie Rental</h1>
        </div>
        <p className="fill"></p>
        <Button variant="2" onClick={onAuthenticationClick}>
          Autentificare
        </Button>
        <Button variant="2" onClick={onRegisterClick}>
          Inregistrare
        </Button>
      </div>
      <Outlet />
    </body>
  );
};

export default Header;
