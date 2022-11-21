import { AiFillPlayCircle } from "react-icons/ai/";

const MovieCard = () => {
  const play = () => {
    console.log("play.");
  };

  const addTo = () => {
    console.log("play.");
  };

  return (
    <div className="card">
      <div className="card-gradient">
        <img className="movie-cover" src="https://picsum.photos/240/160" />
      </div>
      <div className="details">
        <h1 className="title">Title</h1>
        <p className="duration">1h 35m</p>
      </div>
      <div className="buttons">
        <h1 className="play-button" onClick={play}>
          <AiFillPlayCircle />
        </h1>
      </div>
    </div>
  );
};

export default MovieCard;
