import { AiFillPlayCircle } from "react-icons/ai/";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const navigate = useNavigate();

  const goToMovie = () => {
    if (props.hasOwnProperty("searchInputRef")) {
      props.searchInputRef.current.value = "";
      props.setsearchedMovieCards(null);
    }
    if (props.movie.hasOwnProperty("idMovie")) {
      navigate("/movie/" + props.movie.idMovie);
    } else {
      navigate("/movie/" + props.movie.id);
    }
  };

  return (
    <div className="card" onClick={goToMovie}>
      <div className="card-gradient">
        <img
          className="movie-cover-card"
          src={props.movie.image}
          width="160px"
          height="240px"
        />
      </div>
      <div className="details">
        <h1 className="title">{props.movie.title}</h1>
        <p className="duration">{props.movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
