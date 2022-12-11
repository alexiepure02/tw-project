import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "../styles.scss";
import { UserContext } from "../UserContextProvider";
import Button from "./Button";

import Sidebar from "./Sidebar";

const Header = () => {
  const { authenticated } = useContext(UserContext);
  const [headerPrefix, setHeaderPrefix] = useState();

  useEffect(() => {
    setHeaderPrefix(authenticated ? "" : "un");
  }, [authenticated]);

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
        <h1 className="logo" onClick={(e) => navigate("/")}>
          bunnyTV
        </h1>
        {!authenticated ? (
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
