import mongoose from "mongoose";

const recentEvents = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Object,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

export const RecentEvents = mongoose.model('recentEvent', recentEvents);
