import axios from "axios";

export const getLastYearMovie = async () => {
  const response = await axios.get("http://localhost:8800/getLastYearMovie");
  return response.data;
};

export const getMostPopularMovies = async () => {
  const response = await axios.get("http://localhost:8800/getPopularMovies");
  return response.data;
};

export const getMoviesByRating = async () => {
  const response = await axios.get("http://localhost:8800/getMoviesByRating");
  return response.data;
};

export const getRentedMovies = async (idUser) => {
  const response = await axios.get("http://localhost:8800/getRentedMovies", {
    idUser: idUser,
  });
  return response.data;
};

export const getMovie = async (id) => {
  const response = await axios.get("http://localhost:8800/movie/" + id);
  return response.data;
};

export const getRandomMovie = async () => {
  const response = await axios.get("http://localhost:8800/getRandomMovie");
  return response.data;
};

export const search = async (title) => {
  const response = await axios.get("http://localhost:8800/search/" + title);
    
  return response.data;
};
