const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  _id: String,
  name: String,
  created: Number,
  orders: [
    {
      type: String,
      ref: 'Order',
    },
  ],
});

module.exports = model('User', UserSchema);
