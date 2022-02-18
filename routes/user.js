const express = require("express");
const router = express.Router();
const User = require("../module/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middleware/passport");
const {
  registerRules,
  loginRules,
  validation,
} = require("../middleware/validator");
//register
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    const newUser = new User({ name, lastname, email, password });
    //check if email already exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }
    //password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;
    //generate a token

    //save user
    const newUserToken = await newUser.save();
    const payload = {
      id: newUserToken.id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.secretorkey, {
      expiresIn: 87000000,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user is saved",
      token: `bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exist
    const searchedUser = await User.findOne({ email });
    //if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }

    //password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    //send the user
    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //cree un token
    const payload = {
      id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.secretorkey, {
      expiresIn: 87000000,
    });
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send(error);
  }
});
// current
router.get("/current", isAuth(), async (req, res) => {
  res.status(200).send({ user: req.user });
});
module.exports = router;
