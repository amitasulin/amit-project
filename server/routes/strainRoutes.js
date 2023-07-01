const express = require("express");
const { authenticateUser, authorizeUser} = require('../middleware/authentication');
const router = express.Router();


const {
  getAll,
  getById,
  updateById,
  deleteAll,
  deleteById,
} = require("../controllers/strainControllers");
const { create } = require("../models/user");


router.post("/", authenticateUser, authorizeUser(['admin']),create);
//getAll
router.get("/", getAll);
//getById
router.get("/:id", getById);
//updateById
router.put("/:id", authenticateUser, authorizeUser(['admin']),updateById);  // .get('/', authenticateUser, authorizeUser(['admin']), getAllUsers);
//deleteById
router.delete("/:id",authenticateUser, authorizeUser(['admin']), deleteById);
//deleteAll
router.delete("/", deleteAll);


module.exports = router;


