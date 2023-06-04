const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  texture: {
    type: String,
    required: true,
  },
  deliveryInfo: {
    type: String,
    required: true,
  },
  customerDetails: {
    customerName: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      required: true,
    },
  },
});

module.exports = model('Order', OrderSchema);
