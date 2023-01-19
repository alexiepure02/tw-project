const router = require("express").Router();
const axios = require("axios");
const Rent = require("../models/Rent");

//Get movies from last year 
router.get("/getLastYearMovie", async(req, res) =>{
    const options = {
        method: 'GET',
        url: 'https://imdb-api.com/en/API/MostPopularMovies/k_pke1qzq2'
      };
      
      axios.request(options).then(function (response) {
        const aMovieList = response.data.items;
        const date = new Date().getFullYear();
        const aMoviesByYear = aMovieList.filter(item => item.year == date);

        res.json(aMoviesByYear);
      }).catch(function (error) {
          console.error(error);
      });
})

//Get popular movie  ->for trending now
router.get("/getPopularMovies", async(req, res) =>{
    const options = {
        method: 'GET',
        url: 'https://imdb-api.com/en/API/MostPopularMovies/k_pke1qzq2'
      };
      
      axios.request(options).then(function (response) {
        const aMovieList = response.data.items;
        const aMoviesByPopular = aMovieList.sort((a, b) => (a.imDbRatingCount < b.imDbRatingCount) ? 1 : -1);

        res.json(aMoviesByPopular);
      }).catch(function (error) {
          console.error(error);
      });
})

//Get movies by renting 
router.get("/getMoviesByRating", async(req, res) =>{
    const options = {
        method: 'GET',
        url: 'https://imdb-api.com/en/API/MostPopularMovies/k_pke1qzq2'
      };
      
      axios.request(options).then(function (response) {
        const aMovieList = response.data.items;
        const aMoviesByRaiting = aMovieList.sort((a, b) => (a.imDbRating < b.imDbRating) ? 1 : -1);

        res.json(aMoviesByRaiting);
      }).catch(function (error) {
          console.error(error);
      });
})

//Check if movie rented
router.get("/checkMovieRented", async(req, res) =>{
    Rent.findOne({id: req.params.idUser, movie : req.params.idMovie }).exec(function(err, docs) {
        res.status(200).json(docs.processed)
      });
})

//Get rented movies 
router.get("/getRentedMovies", async(req, res) =>{
    console.log("im here")
    Rent.find({id: req.body.idUser}).exec(function(err, docs) {
        console.log(docs)
        res.json(docs)
      });
})

//Get movie by id 
router.get("/movie/:id", async(req, res) =>{
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/Title/k_pke1qzq2/${req.params.id}`
      };
      
      console.log(options.url)
      axios.request(options).then(function (response) {
        res.json(response.data);
      }).catch(function (error) {
          console.error(error);
      });
})

module.exports = router; 