import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventId: {
    type: String,
    required: true,
    unique: true
  },
  eventImage: {
    type: String,
    required: true
  }
});

// Create a model from the schema
export const Event = mongoose.model('Event', eventSchema);


