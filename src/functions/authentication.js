export const login = async (username, password) => {
  // const response = await axios.post("https://localhost:7228/api/users/login", {
  //   userName: username,
  //   password: password,
  // });

  // localStorage.setItem("auth-token", response.data.token);

  localStorage.setItem("auth-token", "12345");
};

export const logout = () => {
  localStorage.removeItem("auth-token");
};

export const checkIfAuthenticated = () => !!localStorage.getItem("auth-token");
