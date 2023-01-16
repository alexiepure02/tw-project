import { AiFillPlayCircle } from "react-icons/ai/";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={(e) => {
        navigate("/movie/" + props.movie.id);
        // navigate(0);
      }}
    >
      <div className="card-gradient">
        <img className="movie-cover-card" src={props.movie.cover} />
      </div>
      <div className="details">
        <h1 className="title">{props.movie.title}</h1>
        <p className="duration">{props.movie.duration}</p>
      </div>

    </div>
  );
};

export default MovieCard;
