import React from "react";
import { elastic as Menu } from "react-burger-menu"; // could also use slide or bubble
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const onAuthenticationClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    <Menu right>
      <h4 className="menu-item" onClick={(e) => navigate("/")}>
        Acasa
      </h4>
      <h4 className="menu-item" onClick={(e) => navigate("/account")}>
        Contul tau
      </h4>
      <h4 className="menu-item" onClick={(e) => navigate("/rented-movies")}>
        Filmele tale
      </h4>
      <h4 className="menu-item" onClick={(e) => navigate("/settings")}>
        Setari
      </h4>
    </Menu>
  );
};

export default Sidebar;
