import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MoviesCarousel from "../components/MoviesCarousel";
import {
  getLastYearMovie,
  getMostPopularMovies,
  getMoviesByRating,
  getRandomMovie,
} from "../functions/api";

const HomePageSignedIn = () => {
  const [mainMovie, setMainMovie] = useState(null);
  const [sections, setSections] = useState(null);
  
  const navigate = useNavigate();

  const fetchAndSetMovies = async () => {
    const lastYear = await getLastYearMovie();
    const mostPopular = await getMostPopularMovies();
    const byRating = await getMoviesByRating();

    setSections([
      { sectionTitle: "Filme din ultimul an", movies: lastYear },
      { sectionTitle: "Cele mai populare filme", movies: mostPopular },
      { sectionTitle: "Cele mai bine cotate filme", movies: byRating },
    ]);
  };

  const fetchAndSetMainMovie = async () => {
    setMainMovie(await getRandomMovie());
  };

  useEffect(() => {
    fetchAndSetMovies();
    fetchAndSetMainMovie();
  }, []);

  const goToMainMovie = () => {
    navigate("/movie/" + mainMovie.id);
  };

  return (
    <>
      <div className="home-signed">
        {mainMovie && (
          <div className="main-movie-container">
            <img className="main-movie" src={mainMovie.image} />
            <div className="main-movie-overlay">
              <h1 className="title">{mainMovie.title}</h1>
              <Button variant="1" onClick={goToMainMovie}>
                Mai multe informații..
              </Button>
            </div>
          </div>
        )}
        {sections && (
          <>
            {sections.map((section) => {
              return (
                <MoviesCarousel
                  movies={section.movies}
                  sectionTitle={section.sectionTitle}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default HomePageSignedIn;
