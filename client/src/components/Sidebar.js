import React from "react";
import { elastic as Menu } from "react-burger-menu"; // could also use slide or bubble
import { useNavigate } from "react-router-dom";
import { logout } from "../functions/authentication";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Menu right>
      <h4 className="menu-item" onClick={(e) => navigate("/movies")}>
        Acasa
      </h4>
      <h4 className="menu-item" onClick={(e) => navigate("/account")}>
        Contul tău
      </h4>
      <h4 className="menu-item" onClick={(e) => navigate("/rented-movies")}>
        Filmele tale
      </h4>
      <h4 className="menu-item" onClick={handleLogout} style={{ color: "red" }}>
        Logout
      </h4>
    </Menu>
  );
};

export default Sidebar;
