import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NoPage from "./pages/NoPage";
import MoviePage from "./pages/MoviePage";
import AccountPage from "./pages/AccountPage";
import RentedMoviesPage from "./pages/RentedMoviesPage";
import HomePageUnsigned from "./pages/HomePageUnsigned";
import HomePageSignedIn from "./pages/HomePageSignedIn";

import "./styles.scss";
import PrivateRoutes from "./PrivateRoutes";
import RentMoviePage from "./pages/RentMoviePage";
import PlayMoviePage from "./pages/PlayMoviePage";
import Completion from "./pages/Completion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePageUnsigned />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="movies" element={<HomePageSignedIn />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="rented-movies" element={<RentedMoviesPage />} />
            <Route path="rent-movie/:id" element={<RentMoviePage />} />
            <Route path="play/:id" element={<PlayMoviePage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="/completion" element={<Completion />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
