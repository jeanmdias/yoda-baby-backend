const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  name: String,
  url: String,
  language: String,
  skillId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Content", ContentSchema);
