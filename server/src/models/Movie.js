const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title : {type:String, require:true, unique:true},
    details : {type :String}, 
    genre : {type : String},
    releaseDate : {type: Number},
    duration : {type: Number},
    img : {type : Boolean},
    imgThumb : {type : Boolean},
    video : {type : String},
    rentnumber : {type : Number}

},
{timestamps: true});

module.exports = mongoose.model("Movie", MovieSchema);