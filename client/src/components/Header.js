import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  checkIfAuthenticated,
  checkIfTokenExpired,
  logout,
} from "../functions/authentication";

import "../styles.scss";
import Button from "./Button";

import Sidebar from "./Sidebar";

import logo from "../assets/logo.png";

const Header = () => {
  const isAuthenticated = checkIfAuthenticated();
  const [headerPrefix, setHeaderPrefix] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setHeaderPrefix(isAuthenticated ? "" : "un");
    if (isAuthenticated) {
      if (checkIfTokenExpired()) {
        logout();
      }
    }
  }, [isAuthenticated]);

  const onAuthenticationClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    <>
      <div className={"header header-" + headerPrefix + "signed"}>
        <div
          className="logo-container"
          onClick={(e) =>
            isAuthenticated ? navigate("/movies") : navigate("/")
          }
        >
          <img src={logo} width="65px" height="65px" />
          <h1>BunnyTV</h1>
        </div>
        {!isAuthenticated ? (
          <div className="buttons-container">
            <Button variant="2" onClick={onRegisterClick}>
              Inregistrare
            </Button>
            <Button variant="2" onClick={onAuthenticationClick}>
              Autentificare
            </Button>
          </div>
        ) : (
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right
          />
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
