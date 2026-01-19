const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: String,
  photo: String, // image filename
  linkedin: String,
}, { timestamps: true });

module.exports = mongoose.model("Member", memberSchema);
