import React, { useContext } from "react";
import MoviesCarousel from "../components/MoviesCarousel";
import { UserContext } from "../UserContextProvider";

const HomePageSignedIn = () => {
  const { userName } = useContext(UserContext);

  return (
    <div className="home-signed">
      <MoviesCarousel numberOfMovies="10" sectionTitle="Section title" />
      <MoviesCarousel numberOfMovies="7" sectionTitle="Section title" />
      <MoviesCarousel numberOfMovies="8" sectionTitle="Section title" />
      <MoviesCarousel numberOfMovies="20" sectionTitle="Section title" />
      <MoviesCarousel numberOfMovies="16" sectionTitle="Section title" />
      <MoviesCarousel numberOfMovies="24" sectionTitle="Section title" />
      <MoviesCarousel numberOfMovies="12" sectionTitle="Section title" />
    </div>
  );
};

export default HomePageSignedIn;
