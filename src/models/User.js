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
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  thoughts: [thoughts],
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
