import { AiFillPlayCircle } from "react-icons/ai/";
import { useNavigate } from "react-router-dom";

const MovieCard = () => {
  const navigate = useNavigate();

  // NAVIGATE TO MOVIE DDOESN'T WORK IF ALREADY ON /MOVIE PAGE

  return (
    <div className="card" onClick={(e) => navigate("/movie")}>
      <div className="card-gradient">
        <img className="movie-cover-card" src="https://picsum.photos/240/160" />
      </div>
      <div className="details">
        <h1 className="title">Title</h1>
        <p className="duration">1h 35m</p>
      </div>
      {/* <div className="buttons">
        <h1 className="play-button" onClick={play}>
          <AiFillPlayCircle />
        </h1>
      </div> */}
    </div>
  );
};

export default MovieCard;
