const { Schema, model } = require("mongoose");
const userSchema = {
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    // validate email
  },

  thoughts: [
    {
      type: Schema.Types.ObjectID,
      ref: "Thought",
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectID,
      ref: "User",
    },
  ],
};

const schema = new Schema(userSchema);

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", schema);

module.exports = User;
