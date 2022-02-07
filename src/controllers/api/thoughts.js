const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const Thoughts = await Thought.find({});
    return res.json({ success: true, data: Thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { ThoughtId } = req.params;
    const Thought = await Thought.findById(ThoughtId);
    return res.json({ success: true, data: Thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};

const createThought = (req, res) => {
  res.send("createThought");
};

const updateThoughtById = (req, res) => {
  res.send("updateThoughtById");
};

const deleteThoughtById = (req, res) => {
  const { ThoughtId } = req.params;

  console.log("ThoughtId", ThoughtId);

  res.send("deleteThoughtById");
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
