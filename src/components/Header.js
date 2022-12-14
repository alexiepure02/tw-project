import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkIfAuthenticated } from "../functions/authentication";

import "../styles.scss";
import Button from "./Button";

import Sidebar from "./Sidebar";

const Header = () => {
  const isAuthenticated = checkIfAuthenticated();
  const [headerPrefix, setHeaderPrefix] = useState();

  useEffect(() => {
    setHeaderPrefix(isAuthenticated ? "" : "un");
  }, [isAuthenticated]);

  const navigate = useNavigate();

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
          bunnyTV
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
