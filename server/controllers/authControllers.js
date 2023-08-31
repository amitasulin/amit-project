const bcrypt = require("bcrypt");
const User = require("../models/user");
const { generateToken } = require("../config/jwt");
const { AUTH_MAX_AGE } = process.env;
const Joi = require("joi");

const signUpValidation = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().min(6).max(20).required(),
});

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const isValid = signUpValidation.validate({
    firstName,
    lastName,
    email,
    password,
  });

  if (isValid.error) {
    console.log(isValid.error);
    return res.status(400).json({ error: "Validation failed" });
  }

  try {
    //check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "User is already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user in database
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const payload = {
      id: newUser.id,
      email,
    };

    const token = await generateToken(payload);

    res.cookie("token", token, {
      httpOnly: false,
      maxAge: AUTH_MAX_AGE,
    });

    return res.status(200).json(payload);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const signInValidation = Joi.object({
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().min(6).max(20).required(),
});

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const isValid = signInValidation.validate({ email, password });
  if (isValid.error) {
    console.log(isValid.error);
    res.status(400).json({ error: "Validation failed" });
  }

  try {
    // check if user exist in db
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // compare passwords
    const isMatch = bcrypt.compare(password, user.password);

    // the password is incorrect
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = await generateToken(payload);

    res.cookie("token", token, {
      httpOnly: false,
      maxAge: AUTH_MAX_AGE,
    });

    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot sign you in" });
  }
};

const signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Signed out successfully" });
};

module.exports = { signUp, signOut, signIn };
