const create = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

const deleteAll = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

//full create/read/update/delete

module.exports = { create, getAll, getById, updateById, deleteById, deleteAll };
