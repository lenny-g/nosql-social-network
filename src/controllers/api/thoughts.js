const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({}).populate("reactions");
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to get all thoughts from DB | ${error.message}`
    );
    return res
      .status(500)
      .json({ success: false, error: "Failed to get all thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findById(thoughtId).populate("reactions");
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought by ID | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought by ID" });
  }
};

const createThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const thought = await Thought.create({ thoughtText, username });
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create thought in the DB" });
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const body = req.body;

    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      { ...body },
      { new: true }
    );

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to update thought by ID | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update thought" });
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findByIdAndDelete(thoughtId);
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete thought from DB | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete thought from DB" });
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
