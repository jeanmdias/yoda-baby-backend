const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: String,
  country: String,
  group: {
    type: mongoose.Schema.Types.ObjectId, ref: "Group"
  },
  sources: [{
    type: mongoose.Schema.Types.ObjectId, ref: "Source"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Person", PersonSchema);
