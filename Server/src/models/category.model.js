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
  totalName: {
    type: String,
    default: '',
  },
  subs: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
});

CategorySchema.pre('findOne', function (next) {
  this.populate('subs');
  next();
});

module.exports = mongoose.model('categories', CategorySchema);
