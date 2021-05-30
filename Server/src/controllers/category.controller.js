const mongoose = require('mongoose');
const category = require('../models/category.model');

const createCategory = (req, res) => {
  if (req.body._id == '') {
    let data = {};
    data.name = req.body.name;
    data.iscontent = req.body.iscontent;
    data.description = req.body.description;
    data.totalName = req.body.name;
    category.create(data, (err, data) => {
      if (err) {
        return res.status(500).send({
          message: err.message,
        });
      } else {
        return res.status(200).send(data);
      }
    });
  } else {
    category
      .findByIdAndUpdate(req.body._id, req.body, { new: true })
      .then((data) => {
        if (!data) {
          return res.status(404).send({ message: 'No data found' });
        }
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res
          .status(404)
          .send({ message: 'Error while updating the post' });
      });
  }
};

const getCategorie = (req, res) => {
  (async function () {
    await category
      .findById(req.body.id)
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message,
        });
      });
  })();
};
const getCategories = (req, res) => {
  category
    .find({ parentId: null })
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
const createChild = (req, res) => {
  let redata = {};
  redata.name = req.body.name;
  redata.iscontent = req.body.iscontent;
  redata.description = req.body.description;
  redata.parentId = req.body.parentID;
  redata.totalName = req.body.totalName + '>' + req.body.name;
  category.create(redata, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message,
      });
    } else {
      category
        .findByIdAndUpdate(
          { _id: req.body.parentID },
          { $push: { subs: data._id } },
        )
        .then((item) => {
          return res.status(200).send();
        })
        .catch((err) => {
          return res.status(500).send({
            message: err.message,
          });
        });
    }
  });
};
module.exports = {
  createCategory,
  getCategories,
  getPreviewData,
  getCategorie,
  createChild,
};
