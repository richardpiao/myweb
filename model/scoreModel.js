const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    unique: false,
    required: [true, "Please tell me your name!"]
  },
  timer: {
    type: Number
  },
  timestamp: {
    type: Date
  }
});

const Score = mongoose.model("Score", UserSchema);
module.exports = Score;
