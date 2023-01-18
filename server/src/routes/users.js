const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//UPDATE Password
router.put('/changepassword', (req, res) => {
    // Verify the access token
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(req.headers.authorization);
        return res.status(401).json({ message: 'Invalid token' });
      }
      // Find the user in the database
      User.findOne({ _id: decoded._id }, (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Internal server error' });
        }
        // Compare the current password with the one provided
        const currentPassword = CryptoJS.AES.decrypt(user.password, process.env.JWT_SECRET);
        if (currentPassword.toString(CryptoJS.enc.Utf8) !== req.body.currentPassword) {
          return res.status(401).json({ message: 'Incorrect current password' });
        }
        // Encrypt the new password
        const newPassword = CryptoJS.AES.encrypt(req.body.newPassword, process.env.JWT_SECRET);
        // Update the user's password
        user.password = newPassword.toString();
        user.save((err) => {
          if (err) {
            return res.status(500).json({ message: 'Internal server error' });
          }
          return res.json({ message: 'Password changed successfully' });
        });
      });
    });
  });



//DELETE
//GET
//GET ALL
//GET USER STATS



  

module.exports = router;