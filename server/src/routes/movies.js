const router = require("express").Router();
const Movie = require("../models/Movie");

//AddMovie
router.post("/addMovie", async (req, res) => {
    const newMovie = Movie({
        title : req.body.title,
        details :  req.body.details,
        genre : req.body.genre,
        releaseDate : req.body.releaseDate,
        duration : req.body.duration
        //img
        //imgThumb
        //video
    });

    try{
        const movie = await newMovie.save();
        console.log(movie);
        res.status(201).json(movie); 
    } catch (err) {
        res.status(500).json(err);
    }
})

//get movies by user id
router.get("/byuserid/:id", async (req, res) =>{
    Movie.findOne({genre: req.params.id}).limit(15).exec(function(err, docs) {
        res.status(200).json(docs)
      });

})

//get movies by genre 
router.get("/bygenre/:genre", async(req, res) =>{
    

    //ID, title, duration, image

    Movie.find({genre: req.params.genre}).limit(15).exec(function(err, docs) {
        res.status(200).json(docs)
      });

})

//get movies by released in the last year
router.get("/thisyear", async(req, res) =>{
    
    const currentTime = new Date();
    const year = currentTime.getFullYear();

    Movie.find({releaseDate: year}).limit(15).exec(function(err, docs) {
        res.status(200).json(docs)
      });

})

//get movie by id
router.get("/:id", async (req, res) =>{
    Movie.findOne({genre: req.params.id}).limit(15).exec(function(err, docs) {
        res.status(200).json(docs)
      });

})
module.exports = router; 