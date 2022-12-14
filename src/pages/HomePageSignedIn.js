import React from "react";
import MoviesCarousel from "../components/MoviesCarousel";
import { getMovies } from "../functions/api";

const HomePageSignedIn = () => {
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
