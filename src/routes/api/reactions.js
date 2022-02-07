const { Router } = require("express");

const {
  createReaction,
  deleteReactionById,
} = require("../../controllers/api/reactions.js");

const router = Router();

router.post("/", createReaction);
router.delete("/:reactionId", deleteReactionById);

module.exports = router;
