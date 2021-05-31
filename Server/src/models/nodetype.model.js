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

CategorySchema.pre('findOne', function (next) {
  this.populate('subs');
  next();
});

module.exports = mongoose.model('categories', CategorySchema);
