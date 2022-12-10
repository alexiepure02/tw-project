import { useEffect } from "react";
import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setUserContext({
      id: 1,
      name: "Alex",
    });
  }, []);

  const setUserContext = async (userInfo) => {
    setUserId(parseInt(userInfo.id));
    setUserName(userInfo.name);

    if (userInfo.hasOwnProperty("avatarUri")) {
      const blob = await fetch(userInfo.avatarUri, {
        cache: "reload",
      }).then((r) => r.blob());
      setUserAvatar(URL.createObjectURL(blob));
    } else setUserAvatar(null);
    setAuthenticated(true);
  };

  const value = {
    userId,
    setUserId,
    userName,
    setUserName,
    userAvatar,
    setUserAvatar,
    setUserContext,
    authenticated,
    setAuthenticated,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
