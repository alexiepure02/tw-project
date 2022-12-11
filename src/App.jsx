import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NoPage from "./pages/NoPage";

import { UserContextProvider } from "./UserContextProvider";

import "./styles.scss";
import MoviePage from "./pages/MoviePage";
import RentedMoviesPage from "./pages/RentedMoviesPage";

function App() {
  const id = 3;

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="rented-movies" element={<RentedMoviesPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
