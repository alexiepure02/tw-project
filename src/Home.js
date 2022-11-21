import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContextProvider";
import HomePageUnsigned from "./pages/HomePageUnsigned";
import HomePageSignedIn from "./pages/HomePageSignedIn";

const Home = () => {
  const { authenticated } = useContext(UserContext);

  return authenticated ? <HomePageSignedIn /> : <HomePageUnsigned />;
};

export default Home;
