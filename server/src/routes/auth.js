const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = User({
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  let user;

  try {
    const cred = req.body.email;

    if (cred.indexOf("@") < 0)
      user = await User.findOne({ username: req.body.email });
    else user = await User.findOne({ email: req.body.email });
    if (!user) res.status(404).json("Wrong username or password");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password)
      res.status(404).json("Wrong username or password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        email: user.email,
        isAdmin: user.isAdmin,
        name: user.name,
        profilePic: user.profilePic,
        surname: user.surname,
        username: user.username,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );

    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
