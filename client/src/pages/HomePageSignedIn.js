import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MoviesCarousel from "../components/MoviesCarousel";
import { getMovie, getMovies } from "../functions/api";

const HomePageSignedIn = () => {
  const [mainMovie, setMainMovie] = useState(null);
  const [movies, setMovies] = useState(null);

  const navigate = useNavigate();

  const fetchAndSetMovies = async () => { 
    setMovies(await getMovies());
  }
  useEffect(() => {
    fetchAndSetMovies();
    setMainMovie(getMovie(13));
  }, []);

  const goToMainMovie = () => {
    navigate("/movie/" + mainMovie.id);
  };

  return (
    <>
      <div className="home-signed">
        {mainMovie && (
          <div className="main-movie-container">
            <img className="main-movie" src={mainMovie.cover} />
            <div className="main-movie-overlay">
              <h1 className="title">{mainMovie.title}</h1>
              <Button variant="1" onClick={goToMainMovie}>
                Mai multe informații..
              </Button>
            </div>
          </div>
        )}
        {movies && (
          <>
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
            <MoviesCarousel movies={movies} sectionTitle="Section title" />
          </>
        )}
      </div>
    </>
  );
};

export default HomePageSignedIn;
