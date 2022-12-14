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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route element={<UnauthenticatedWrapper />}> */}
          <Route index element={<HomePageUnsigned />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* </Route> */}
          {/* <Route element={<AuthenticatedWrapper />}> */}
          <Route element={<PrivateRoutes />}>
            <Route path="movies" element={<HomePageSignedIn />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="rented-movies" element={<RentedMoviesPage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
