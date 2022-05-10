const { Router } = require("express");

const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/api/users");

const router = Router();

const friends = require("./friends");

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);
router.use("/:id/friends", friends);
module.exports = router;
