const mongoose = require('mongoose');
const nodetype = require('../models/nodetype.model');
//define the controller
const createType = (req, res) => {
  nodetype
    .create({ data: req.body })
    .then((item) => {
      return res.status(200).send();
    })
    .catch((err) => res.status(500).send());
};

const getlistItems = (req, res) => {
  nodetype
    .find({ parentId: null })
    .then((items) => {
      return res.status(200).send(items);
    })
    .catch((err) => res.status(500).send());
};
const getlistitem = (req, res) => {};
module.exports = {
  createType,
  getlistItems,
  getlistitem,
};
