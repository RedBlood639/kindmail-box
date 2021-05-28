const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let CategorySchema = new Schema({
  name: {
    type: String,
    isRequired: true,
  },
  iscontent: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Category', CategorySchema);
