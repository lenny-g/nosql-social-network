const { Schema } = require("mongoose");
const moment = require("moment");

const reactionSchema = {
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
    default: moment(),
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
