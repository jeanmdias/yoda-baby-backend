const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: String,
  persons:[
    {type: mongoose.Schema.Types.ObjectId, ref: "Person"}
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Group", GroupSchema);
