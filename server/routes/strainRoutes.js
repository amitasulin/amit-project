const express = require("express");
const router = express.Router();

const { authenticateUser, authorizeUser} = require('../middleware/authentication');

const {
  getAll,
  getById,
  updateById,
  deleteById,
  create,
} = require("../controllers/strainControllers");


router.post("/", authenticateUser, authorizeUser(['admin']),create);
//getAll
router.get("/", getAll);
//getById
router.get("/:id", authenticateUser, authorizeUser(['user','admin']), getById);
//updateById
router.put("/:id", authenticateUser, authorizeUser(['admin']), updateById);  
//deleteById
router.delete("/:id", authenticateUser, authorizeUser(['admin']),deleteById);

module.exports = router;


