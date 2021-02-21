const mongoose = require("mongoose");

const SourceSchema = new mongoose.Schema({
  name: String,
  type: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Source", SourceSchema);
