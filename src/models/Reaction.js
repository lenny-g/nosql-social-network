const { Schema } = require("mongoose");
const { formatDate } = require("../utils");

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
    default: Date.now(),
    get: formatDate,
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
