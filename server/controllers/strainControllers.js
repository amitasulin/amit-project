const Joi = require("joi");
const Strain = require("../models/strain");

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

// validation schema for user data

const strainSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  description: Joi.string().required(),
  img_url: Joi.string(),
  mostCommonTerpene: Joi.string(),
  thcLevel: Joi.number(),
});

const getAll = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 12,
      search = "",
      price = ",",
      thc = ",",
      type,
    } = req.query;

    if (limit > 50) limit = 50;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
    };

    const prices = price.split(",");
    const priceFilter = {
      price: { $gte: prices[0] || 0, $lte: prices[1] || 100 },
    };

    /*    const thcs = thc.split(",");
    const thcFilter = {
      thc: { $gte: thcs[0] || 0, $lte: thcs[1] || 100 },
    };
 */
    const strains = await Strain.paginate(
      {
        name: { $regex: search, $options: "i" },
        ...priceFilter,
        type: { $regex: type, $options: "i" },
        /*         ...thcFilter,
         */
      },
      options
    );

    const strainsFixed = { ...strains };
    strainsFixed.data = strainsFixed.docs;
    delete strainsFixed.docs;

    return res.status(200).json(strainsFixed);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const strain = await Strain.findById(new ObjectId(req.params.id));

    if (!strain) {
      return res.status(404).json({ error: "Strain not found" });
    }
    return res.status(200).json({ data: strain });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    /*     const { error } = strainSchema.validate(req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).json({ error: error.details[0].message });
    } */

    const strain = await Strain.create(req.body);
    res.status(200).json({ created: strain });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const strain = await Strain.findByIdAndUpdate(
      new ObjectId(req.params.id),
      req.body,
      {
        new: true,
      }
    );

    if (!strain) {
      return res.status(404).json({ error: "Strain not found" });
    }
    res.status(200).json({ updated: strain });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const strain = await Strain.findByIdAndRemove(new ObjectId(req.params.id));
    if (!strain) {
      res.status(404).json({ error: "Strain not found" });
    }
    res.status(200).json({ deleted: strain });
  } catch (error) {
    next(error);
  }
};

//full create/read/update/delete

module.exports = { create, getAll, getById, updateById, deleteById };
