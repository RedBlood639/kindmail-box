const mongoose = require('mongoose');
const nodetype = require('../models/nodetype.model');
//define the controller
const createType = (req, res) => {
  if (req.body.id === '') {
    //new data
    if (req.body.parentID === null) {
      nodetype
        .create({ data: req.body.value })
        .then((item) => res.status(200).send())
        .catch((err) => res.status(500).send());
    } else {
      nodetype
        .create({
          parentId: req.body.parentID,
          data: req.body.value,
        })
        .then((item) => {
          nodetype
            .findByIdAndUpdate(req.body.parentID, {
              $push: { subs: item._id },
            })
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send());
        })
        .catch((err) => res.status(500).send());
    }
  } else {
    //update
    nodetype
      .findByIdAndUpdate(req.body.id, { data: req.body.value })
      .then((item) => res.status(200).send())
      .catch((err) => res.status(500).send());
  }
};

const getlistitem = (req, res) => {
  nodetype
    .findById(req.query.id)
    .then((item) => {
      res.status(200).send([item]);
    })
    .catch((err) => res.status(500).send());
};
const getlistItems = (req, res) => {
  if (req.query.id == '') {
    nodetype
      .find({ parentId: null })
      .then((items) => {
        return res.status(200).send(items);
      })
      .catch((err) => res.status(500).send());
  } else {
    nodetype
      .find({ parentId: req.query.id })
      .then((items) => {
        return res.status(200).send(items);
      })
      .catch((err) => res.status(500).send());
  }
};
module.exports = {
  createType,
  getlistItems,
  getlistitem,
};
