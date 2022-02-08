const { Schema, model } = require("mongoose");
const { formatDate } = require("../utils");
const reactions = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
    get: formatDate,
  },

  username: {
    type: String,
    required: true,
  },
  reactions: [reactions],
};

const schema = new Schema(thoughtSchema);

const Thought = model("Thought", schema);

module.exports = Thought;
