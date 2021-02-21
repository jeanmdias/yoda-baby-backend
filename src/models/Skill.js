const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Skill", SkillSchema);
