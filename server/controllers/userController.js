const Joi = require("joi");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const getData = async (req, res) => {
  const user = req.user;
  try {
    // check if user exist in db
    const userFound = await User.findById(user.id).populate("wishlist");

    console.log(userFound);

    const payload = {
      id: userFound.id,
      email: userFound.email,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      role: userFound.role,
      profilePicture: userFound.profilePicture,
      wishlist: userFound.wishlist,
      cart: userFound.cart,
      email: userFound.email,
    };

    res.status(200).json(payload);
  } catch (error) {
    res.status(400).json({ error: "Cannot sign you in" });
  }
};

const addToCart = async (req, res, next) => {
  const params = req.params;

  const quantity = params.quantity;
  const strainId = params.strainId;

  const user = req.user;

  const userFound = await User.findById(user.id);

  const cart = userFound.cart;

  let newCart = [...cart, { quantity, strainId }];
  userFound.cart = newCart;

  userFound.save();
  return res.status(200).send();
};

const removeFromCart = async (req, res, next) => {
  const params = req.params;

  const quantity = params.quantity;
  const strainId = params.strainId;

  const user = req.user;

  const userFound = await User.findById(user.id);

  const cart = userFound.cart;

  const foundItemIdx = cart.findIndex((item) => item.id === strainId);

  if (foundItemIdx !== -1) {
    const foundItem = cart[foundItemIdx];
    if (foundItem.quantity - quantity <= 0) {
      let newCart = cart.filter((item) => item.strainId === strainId);
      userFound.cart = newCart;
    } else {
      let newCart = [...cart];
      newCart[foundItemIdx].quantity -= quantity;
      userFound.cart = newCart;
    }
    userFound.save();
    return res.status(200).send();
  }
};

const toggleWishlist = async (req, res, next) => {
  const strainId = req.params.strainId;

  const user = req.user;

  const userFound = await User.findById(user.id);

  const wishlist = userFound.wishlist;

  if (wishlist.includes(strainId)) {
    let newWishlist = wishlist.filter((strain) => !strain._id.equals(strainId));
    userFound.wishlist = newWishlist;
  } else {
    let newWishlist = [...wishlist, strainId];
    userFound.wishlist = newWishlist;
  }

  userFound.save();
  return res.status(200).send();
};

const getAllUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 25 } = req.query;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      select: "-password",
    };

    const users = await User.paginate({}, options);

    const usersFixed = { ...users };
    usersFixed.data = usersFixed.docs;
    delete usersFixed.docs;

    return res.status(200).json(usersFixed);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select(-password);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  // validation schema for user data

  const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).optional(),
    profilePicture: Joi.string().optional(),
    role: Joi.string().optional().default("user").valid("user", "admin"),
  });

  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { firstName, lastName, email, password, profilePicture, role } =
      req.body;

    const found = User.findOne({ email });

    if (found) {
      return res.status(400).json({ error: "This email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profilePicture,
      role,
    });

    return res.status(201).json({ created: user });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).optional(),
    profilePicture: Joi.string().optional(),
    role: Joi.string().optional().default("user").valid("user", "admin"),
  });

  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { firstName, lastName, email, password, profilePicture, role } =
      req.body;

    let updatedUser;
    if (password !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          profilePicture,
          role,
        },
        { new: true }
      ).select("-password");
    } else {
      updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          firstName,
          lastName,
          email,
          profilePicture,
          role,
        },
        { new: true }
      ).select("-password");
    }

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ updated: updatedUser });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id).select(
      "-password"
    );

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ deleted: deletedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  toggleWishlist,
  addToCart,
  removeFromCart,
  getData,
};
