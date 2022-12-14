import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getRentedMovies } from "../functions/api";

const createMovieCards = () => {
  const movies = getRentedMovies();
  return movies.map((movie, index) => <MovieCard key={index} movie={movie} />);
};

const RentedMoviesPage = (props) => {
  const [rentedMovieCards, setRentedMovieCards] = useState("");

  useEffect(() => {
    setRentedMovieCards(createMovieCards());
  }, []);

  return (
    <div className="rented-movies">
      <h1>Filmele tale inchiriate</h1>
      <div className="grid-movies">{rentedMovieCards}</div>
    </div>
  );
};

export default RentedMoviesPage;
