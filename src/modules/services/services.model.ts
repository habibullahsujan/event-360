import mongoose from "mongoose";

const services = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  includedServices: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});


export const Services = mongoose.model('service', services);

