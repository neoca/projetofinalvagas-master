const mongoose = require('../db/conn')
const { Schema } = mongoose

const Vacant = mongoose.model(
  'Vacant',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    company: {
      type: String,
      required: true,
    },
    modality: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    available: {
      type: Boolean,
    },
    user: Object,
    adopter: Object,
  }, {timestamps: true}),
)

module.exports = Vacant
