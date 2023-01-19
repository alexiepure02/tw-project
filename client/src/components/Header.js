import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  checkIfAuthenticated,
  checkIfTokenExpired,
  logout,
} from "../functions/authentication";

import "../styles.scss";
import Button from "./Button";

import Sidebar from "./Sidebar";

import logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import RentedMoviesPage from "../pages/RentedMoviesPage";
import MoviesCarousel from "./MoviesCarousel";
import MoviesGrid from "./MoviesGrid";
import { search } from "../functions/api";
import MovieCard from "./MovieCard";
import debounce from "lodash.debounce";

const Header = () => {
  const isAuthenticated = checkIfAuthenticated();
  const [headerPrefix, setHeaderPrefix] = useState();
  const [searchedMovieCards, setsearchedMovieCards] = useState(null);

  const ref = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setHeaderPrefix(isAuthenticated ? "" : "un");
    if (isAuthenticated) {
      if (checkIfTokenExpired()) {
        logout();
      }
    }
  }, [isAuthenticated]);

  const onAuthenticationClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  const createMovieCards = (movies) => {
    setsearchedMovieCards(
      movies.map((movie) => (
        <MovieCard
          key={movie.id}
          searchInputRef={ref}
          setsearchedMovieCards={setsearchedMovieCards}
          movie={movie}
        />
      ))
    );
  };

  const handleSearchChange = async (e) => {
    debouncedChangeHandler(e.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(async (value) => {
      if (value == "") {
        setsearchedMovieCards(null);
      } else {
        console.log(value);
        const foundMovies = await search(value);
        console.log(foundMovies);
        createMovieCards(foundMovies.results);
      }
    }, 500),
    []
  );

  return (
    <>
      <div className={"header header-" + headerPrefix + "signed"}>
        <div
          className="logo-container"
          onClick={(e) =>
            isAuthenticated ? navigate("/movies") : navigate("/")
          }
        >
          <img src={logo} width="65px" height="65px" />
          <h1>BunnyTV</h1>
        </div>
        {!isAuthenticated ? (
          <div className="buttons-container">
            <Button variant="2" onClick={onRegisterClick}>
              Inregistrare
            </Button>
            <Button variant="2" onClick={onAuthenticationClick}>
              Autentificare
            </Button>
          </div>
        ) : (
          <>
            <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              right
            />
            <div className="search">
              <input
                ref={ref}
                className="search-input"
                id="search"
                name="search"
                placeholder="Caută.."
                onChange={handleSearchChange}
              />
            </div>
          </>
        )}
      </div>
      {searchedMovieCards ? (
        <div className="searched-movies">
          <MoviesGrid movieCards={searchedMovieCards} />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Header;
