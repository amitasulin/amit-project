const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  toggleWishlist,
  addToCart,
  removeFromCart,
  getData,
  sendMail,
} = require("../controllers/userController");
const {
  authenticateUser,
  authorizeUser,
} = require("../middleware/authentication");

router.get("/userData", authenticateUser, getData);
router.get("/", authenticateUser, authorizeUser(["admin"]), getAllUsers);
router.get("/:id", authenticateUser, authorizeUser(["admin"]), getUserById);
router.post("/", authenticateUser, authorizeUser(["admin"]), createUser);
router.put("/:id", authenticateUser, authorizeUser(["admin"]), updateUser);
router.delete("/:id", authenticateUser, authorizeUser(["admin"]), deleteUser);

router.post("/wishlist/:strainId", authenticateUser, toggleWishlist);
router.post("/cart", authenticateUser, addToCart);
router.delete("/cart", authenticateUser, removeFromCart);

router.post("/sendMail", authenticateUser, sendMail);

module.exports = router;
