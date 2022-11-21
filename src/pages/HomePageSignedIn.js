import React, { useContext, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MovieCard from "../components/MovieCard";
import { UserContext } from "../UserContextProvider";

const HomePageSignedIn = () => {
  const { userName } = useContext(UserContext);

  return (
    <div className="home-signed">
      <h1>Hello, {userName}</h1>
      <div className="row">
        <h1 className="section-title">Section title</h1>
        <ScrollContainer className="cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ScrollContainer>
      </div>
      <div className="row">
        <h1 className="section-title">Section title</h1>
        <ScrollContainer className="cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ScrollContainer>
      </div>
      <div className="row">
        <h1 className="section-title">Section title</h1>
        <ScrollContainer className="cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ScrollContainer>
      </div>
      <div className="row">
        <h1 className="section-title">Section title</h1>
        <ScrollContainer className="cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ScrollContainer>
      </div>
      <div className="row">
        <h1 className="section-title">Section title</h1>
        <ScrollContainer className="cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ScrollContainer>
      </div>
      <div className="row">
        <h1 className="section-title">Section title</h1>
        <ScrollContainer className="cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ScrollContainer>
      </div>
      <div className="row">
        <h1 className="section-title">Section title</h1>
        <ScrollContainer className="cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ScrollContainer>
      </div>
    </div>
  );
};

export default HomePageSignedIn;
