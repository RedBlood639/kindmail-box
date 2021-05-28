const mongoose = require('mongoose');
const category = require('../models/category.model');

const createCategory = (req, res) => {
  category.create(req.body, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message,
      });
    } else {
      return res.status(200).send();
    }
  });
};

const getCategories = (req, res) => {
  category
    .find()
    .sort({ name: -1 })
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

const getPreviewData = (req, res) => {
  category
    .findById(req.query.id)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ message: 'Data not found with Name' });
      }
      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: 'Error retriving dadta with Name',
      });
    });
};
module.exports = {
  createCategory,
  getCategories,
  getPreviewData,
};
