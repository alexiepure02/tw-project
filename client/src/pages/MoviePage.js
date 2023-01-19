import { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillPlayCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import MoviesCarousel from "../components/MoviesCarousel";
import { getMovie, getRecommendations } from "../functions/api";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const rented = false;

  const fetchAndSetMovie = async () => {
    setMovie(await getMovie(id));
  };

  useEffect(() => {
    fetchAndSetMovie();
  }, [id]);

  const goToSelectRentingPeriodPage = () => {
    navigate("./select-rent-period");
  };

  const goToPlayMoviePage = () => {
    navigate("./play");
  };

  return (
    movie && (
      <div className="movie">
        <div className="cover-container">
          <img className="movie-cover" src={movie.image} />
          <div className="overlay">
            <div className="left">
              <h1 className="title">{movie.title}</h1>
              <h4 className="duration">{movie.runtimeStr}</h4>
            </div>
            <div className="right">
              <h1 className="play-button">
                {rented ? (
                  <AiFillPlayCircle
                    className="icon"
                    onClick={goToPlayMoviePage}
                  />
                ) : (
                  <AiFillPlusCircle
                    className="icon"
                    onClick={goToSelectRentingPeriodPage}
                  />
                )}
              </h1>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <h3>Descriere</h3>
            <p>{movie.plot}</p>
            <h3>Actori</h3>
            <p>{movie.stars}</p>
            <h3>Producători</h3>
            <p>{movie.directors}</p>
          </div>
          <div className="right">
            <h3>Anul lansării</h3>
            <p>{movie.year}</p>
            <h3>Genre</h3>
            <p>{movie.genres}</p>
            <h3>Imdb rating</h3>
            <p>{movie.imDbRating}</p>
          </div>
        </div>
        <div className="recommendations">
          <MoviesCarousel
            movies={movie.similars}
            sectionTitle="Din aceeasi categorie"
          />
        </div>
      </div>
    )
  );
};

export default MoviePage;
