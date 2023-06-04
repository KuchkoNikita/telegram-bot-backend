const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  data: {
    dataFrom: {
      type: Date,
      required: true,
    },
    dataUntil: {
      type: Date,
      required: true,
    },
  },
  details: {
    chain: {
      type: String,
      required: true,
    },
    genesisSupply: {
      type: String,
      required: true,
    },
    distributionPercentage: String,
  },
  requirements: [{
    coinName: {
      type: String,
      required: true,
    },
    storageDate: Date,
    platform: String,
  }],
  links: [{
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  }],
});

module.exports = model('Post', PostSchema);
