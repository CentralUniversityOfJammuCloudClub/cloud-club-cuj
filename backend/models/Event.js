const mongoose = require("mongoose");

// Structure of an Event
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

// Export the model
module.exports = mongoose.model("Event", eventSchema);
