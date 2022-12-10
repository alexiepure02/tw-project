import { AiFillPlayCircle } from "react-icons/ai/";
import MoviesCarousel from "../components/MoviesCarousel";

const MoviePage = () => {
  return (
    <div className="movie">
      <div className="cover-container">
        <img className="movie-cover" src="https://picsum.photos/1920/1080" />
        <div className="overlay">
          <div className="left">
            <h1 className="title">Title</h1>
            <h4 className="duration">1h 35m</h4>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc
            vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus.
            Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia.
            Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla
            posuere blandit sagittis. Aliquam erat volutpat. Maecenas
            vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci,
            sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit
            amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor
            sapien tincidunt neque, id elementum urna sapien a risus. Integer
            sed vulputate nunc. In est ligula, porttitor sed imperdiet eget,
            sagittis quis ipsum.
          </p>
        </div>
        <div className="right">
          <h3>Alte informatii</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc
            vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus.
            Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia.
            Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla
            posuere blandit sagittis. Aliquam erat volutpat. Maecenas
            vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci,
            sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit
            amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor
            sapien tincidunt neque, id elementum urna sapien a risus. Integer
            sed vulputate nunc. In est ligula, porttitor sed imperdiet eget,
            sagittis quis ipsum. In sollicitudin pellentesque interdum. Morbi
            vitae lobortis orci. Vivamus accumsan venenatis consectetur. Aliquam
            at pharetra risus, sed egestas mi.
          </p>
        </div>
      </div>
      <div className="recommendations">
        <MoviesCarousel
          numberOfMovies="12"
          sectionTitle="Din aceeasi categorie"
        />
      </div>
    </div>
  );
};

export default MoviePage;
