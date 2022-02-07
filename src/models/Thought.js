const { Schema, model } = require("mongoose");
const moment = require("moment");
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
    default: moment(),
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
  reactions: [reactions],
};

const schema = new Schema(thoughtSchema);

const Thought = model("thought", schema);

module.exports = Thought;
