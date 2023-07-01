const express = require("express");
const {
  getAll,
  getById,
  updateById,
  deleteAll,
  deleteById,
} = require("../controllers/strainControllers");
const { create } = require("../models/user");

const router = express.Router();

//api/strains
//create
router.post("/", create);
//getAll
router.get("/", getAll);
//getById
router.get("/:id", getById);
//updateById
router.put("/:id", updateById);
//deleteById
router.delete("/:id", deleteById);
//deleteAll
router.delete("/", deleteAll);

module.exports = router;
