import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MoviesGrid from "../components/MoviesGrid";
import { getRentedMovies } from "../functions/api";

const RentedMoviesPage = (props) => {
  const [rentedMovieCards, setRentedMovieCards] = useState("");

  const createMovieCards = async () => {
    const movies = await getRentedMovies();
    setRentedMovieCards(
      movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
    );
  };

  useEffect(() => {
    createMovieCards();
  }, []);

  return (
    <div className="rented-movies">
      <h1 className="rented-movies-title">Filmele tale inchiriate</h1>
      <MoviesGrid movieCards={rentedMovieCards} />
    </div>
  );
};

export default RentedMoviesPage;
