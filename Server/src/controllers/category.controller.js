const mongoose = require('mongoose');
const category = require('../models/category.model');

const createCategory = (req, res, next) => {
  category.create(req.body, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message,
      });
    } else {
      return res.json(data);
    }
  });
};

const getCategories = (req, res, next) => {
  category
    .find()
    .sort({ name: -1 })
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};
module.exports = {
  createCategory,
  getCategories,
};
