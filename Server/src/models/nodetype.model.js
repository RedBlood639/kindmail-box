const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let CategorySchema = new Schema({
  parentId: {
    type: Schema.Types.ObjectId,
    default: null,
  },
  data: {},
  subs: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
});

module.exports = mongoose.model('categories', CategorySchema);
