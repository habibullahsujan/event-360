import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  }
});

// Create a model from the schema
export const Event = mongoose.model('Event', eventSchema);


