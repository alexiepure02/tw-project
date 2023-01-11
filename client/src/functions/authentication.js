import axios from "axios";
import jwtDecode from "jwt-decode";

export const register = async (username, password, displayName) => {
  // thinker with it a bit more

  await axios.post("http://localhost:8800/register", {
    userName: username,
    password: password,
    displayName: displayName,
  });
};

export const login = async (username, password) => {
//  localStorage.setItem("auth-token", "1234");

  const response = await axios.post("http://localhost:8800/login", {
    email: username,
    password: password,
  });

  localStorage.setItem("auth-token", response.data.accessToken);
};

export const logout = () => {
  localStorage.removeItem("auth-token");
};

export const checkIfTokenExpired = () => {
  const exp = jwtDecode(localStorage.getItem("auth-token")).exp;

  if (exp * 1000 < Date.now()) {
    logout();
  }
};

export const checkIfAuthenticated = () => !!localStorage.getItem("auth-token");

export const getUserInfo = () => jwtDecode(localStorage.getItem("auth-token"));
