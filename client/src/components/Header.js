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
        <h1
          className="logo"
          onClick={(e) =>
            isAuthenticated ? navigate("/movies") : navigate("/")
          }
        >
          BunnyTV
        </h1>
        {!isAuthenticated ? (
          <>
            <Button variant="2" onClick={onAuthenticationClick}>
              Autentificare
            </Button>
            <Button variant="2" onClick={onRegisterClick}>
              Inregistrare
            </Button>
          </>
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
