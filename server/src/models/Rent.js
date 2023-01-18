const mongoose = require("mongoose");

const RentSchema = new mongoose.Schema({
    title: {type:String },
    idMovie: {type : String}, 
    idUser: {type : String},
    startDate: {type : Date},
    endDate: {type : Date},
    processed: {type : Boolean}

},
{timestamps: true});

module.exports = mongoose.model("Rent", RentSchema);