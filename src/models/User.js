const { Schema, model } = require("mongoose");

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

  thoughts: [thought],
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
