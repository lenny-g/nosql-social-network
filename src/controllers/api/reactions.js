const { Thought } = require("../../models");

const createReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { reactionBody, username } },
      },
      { new: true }
    );

    return res.json({ success: true, data: updatedThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction" });
  }
};

const deleteReactionById = async (req, res) => {
  try {
    const { reactionId, thoughtId } = req.params;

    console.log(reactionId, thoughtId);

    const thought = await Thought.findByIdAndUpdate(thoughtId, {
      $pull: { reactions: { _id: reactionId } },
    });

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction" });
  }
};

module.exports = { createReaction, deleteReactionById };
