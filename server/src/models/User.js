const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {type:String, require:true},
    surname: {type:String, require:true},
    username: {type:String, require:true, unique:true},
    email: {type:String, require:true, unique:true}, 
    password: {type:String, require:true}, 
    profilePic: {type:String, default:""},
    isAdmin: {type:Boolean, default:false}
},
{timestamps: true});

module.exports = mongoose.model("User", UserSchema);