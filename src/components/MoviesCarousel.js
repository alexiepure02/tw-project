import ScrollContainer from "react-indiana-drag-scroll";
import MovieCard from "./MovieCard";

const MoviesCarousel = (props) => {
  const movies = Array.from({ length: props.numberOfMovies }, (_, index) => {
    return <MovieCard key={index} />;
  });

  return (
    <div className="carousel-row">
      <h1 className="section-title">{props.sectionTitle}</h1>
      <ScrollContainer className="cards">{movies}</ScrollContainer>
    </div>
  );
};

export default MoviesCarousel;
