import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import MoviesCarousel from "../components/MoviesCarousel";
import { getMovies } from "../functions/api";
import { UserContext } from "../UserContextProvider";

const HomePageSignedIn = () => {
  const { userName } = useContext(UserContext);

  const movies = getMovies(5);

  return (
    <div className="home-signed">
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
    </div>
  );
};

export default HomePageSignedIn;
