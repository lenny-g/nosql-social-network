const { Schema, model } = require("mongoose");

const reactionSchema = {
  _id: {
    type: ID,
  },

  reactionBody: {
    type: String,
    required: true,
    MaxLength: 280,
  },

  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

const schema = new Schema(reactionSchema);

const Reaction = model("reaction", schema);

module.exports = Reaction;
