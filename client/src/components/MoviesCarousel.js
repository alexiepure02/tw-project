import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import MovieCard from "./MovieCard";

const createMovieCards = (movies) =>
  movies.map((movie, index) => <MovieCard key={index} movie={movie} />);

const MoviesCarousel = (props) => {
  const [movieCards, setMovieCards] = useState("");

  useEffect(() => {
    setMovieCards(createMovieCards(props.movies));
  }, []);

  return (
    <div className="carousel-movies">
      <h1 className="section-title">{props.sectionTitle}</h1>
      {movieCards && (
        <ScrollContainer className="cards">{movieCards}</ScrollContainer>
      )}
    </div>
  );
};

export default MoviesCarousel;
