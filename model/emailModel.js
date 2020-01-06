const mongoose = require("mongoose");
const EmailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "what is your name?"]
  },
  address: {
    type: String,
    required: [true, "what is your email?"]
  },
  message: {
    type: String,
    required: [true, "What is your message?"]
  },
  timestamp: {
    type: Date
  }
});

const Email = mongoose.model("Email", EmailSchema);
module.exports = Email;
