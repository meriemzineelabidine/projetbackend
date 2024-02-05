const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {RulesLogin,RulesRegister,validation}=require('../middelwaire/validator')
const isAuth=require('../middelwaire/passport')

// sign up user

userRouter.post("/signup",RulesRegister(),validation, async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    const newuser = new User({ name, lastname, email, password });
    //find email
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }
    //haching password
    const saltRounds = 10;
    const gensalt = await bcrypt.genSalt(saltRounds);
    const hashpassword = await bcrypt.hash(password, gensalt);
    //save new user
    newuser.password = hashpassword;
    await newuser.save();
    const payload={
      _id:newuser.id,
      name:newuser.name
    }
    const token=jwt.sign(payload,process.env.SECRETORKEY)
    res.status(200).send({ newuser, msg: "new user saved",token:`Bearer ${token}`});
  } catch (error) {
    res.status(500).send("cannot save the user");
  }
});

// login (singn in)

userRouter.post("/login", RulesLogin(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exists
    const searchedUser = await User.findOne({ email });
    //find if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    //passwords are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // create a token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    });

    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "cannot find the user" });
  }
});
//get methode
userRouter.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = userRouter;
