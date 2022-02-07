const { Schema, model } = require("mongoose");
const thoughts = require("./Thought");

const userSchema = {
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    match: true,
  },

  thoughts: [thoughts],
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
