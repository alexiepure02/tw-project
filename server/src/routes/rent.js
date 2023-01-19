const router = require("express").Router();
const Rent = require("../models/Rent");

//populare Rent table
router.post("/paymentApproval", async (req, res) => {
    var newRent = Rent({
            title: req.body.title,
            idMovie: req.body.idMovie, 
            idUser: req.body.idUser,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            image: req.body.image,
            processed: req.body.processed
        });
        console.log(newRent);
        try {
            const rent = await newRent.save();
            res.status(201).json(rent);
          } catch (err) {
            res.status(500).json(err);
          }
});

module.exports = router; 