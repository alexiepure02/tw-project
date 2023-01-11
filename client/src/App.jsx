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
import CompletionPage from "./pages/CompletionPage";
import SelectRentingPeriodPage from "./pages/SelectRentingPeriodPage";

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
            <Route
              path="movie/:id/select-rent-period"
              element={<SelectRentingPeriodPage />}
            />
            <Route path="movie/:id/rent-movie" element={<RentMoviePage />} />
            <Route path="movie/:id/completed-payment" element={<CompletionPage />} />
            <Route path="rented-movies" element={<RentedMoviesPage />} />
            <Route path="play/:id" element={<PlayMoviePage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
