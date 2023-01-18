const router = require("express").Router();
const axios = require("axios");
//const Rent = requrie("../src/models/Rent");

//filmele din ultimul an

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

//cele mai populare filme
router.get("/getPopularMovie", async(req, res) =>{
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

//dupa rating
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

//filme inchiriate
// router.get("/getRentedMovies", async(req, res) =>{
//     const options = {
//         method: 'GET',
//         url: 'https://imdb-api.com/en/API/MostPopularMovies/k_pke1qzq2'
//       };
      
//       axios.request(options).then(function (response) {
//         const aMovieList = response.data.items;
//         const date = new Date().getFullYear();
//         const aMoviesByYear = aMovieList.sort((a, b) => (a.imDbRating < b.imDbRating) ? 1 : -1);

//         Rent.findOne({idUser: req.body.idUser}).exec(function(err, docs) {
//             res.status(200).json(docs)
//           });

//         res.json(aMoviesByYear);
//       }).catch(function (error) {
//           console.error(error);
//       });
// })


module.exports = router; 