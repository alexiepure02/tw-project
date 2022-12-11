import { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai/";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MoviesCarousel from "../components/MoviesCarousel";
import { getMovie, getRecommendations } from "../functions/api";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  useEffect(() => {
    setMovie(getMovie(id));
    setRecommendedMovies(getRecommendations(5));
  }, [id]);

  return (
    movie && (
      <div className="movie">
        <div className="cover-container">
          <img className="movie-cover" src={movie.cover} />
          <div className="overlay">
            <div className="left">
              <h1 className="title">{movie.title}</h1>
              <h4 className="duration">{movie.duration}</h4>
            </div>
            <div className="right">
              {/* <h1>AAA</h1> */}
              <h1 className="play-button">
                <AiFillPlayCircle />
              </h1>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <h3>Descriere</h3>
            <p>{movie.description}</p>
          </div>
          <div className="right">
            <h3>Alte informatii</h3>
            <p>{movie.otherInfo}</p>
          </div>
        </div>
        <div className="recommendations">
          <MoviesCarousel
            movies={recommendedMovies}
            sectionTitle="Din aceeasi categorie"
          />
        </div>
      </div>
    )
  );
};

export default MoviePage;
