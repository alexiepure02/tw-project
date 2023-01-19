import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import MovieCard from "./MovieCard";

const MoviesCarousel = (props) => {
  const [movieCards, setMovieCards] = useState(null);

  const createMovieCards = (movies) => {
    return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  };
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
