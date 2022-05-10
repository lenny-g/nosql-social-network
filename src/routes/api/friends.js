const { Router } = require("express");

const {
  addNewFriendToUser,
  deleteUserFriend,
} = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/", addNewFriendToUser);
router.delete("/:friendId", deleteUserFriend);

module.exports = router;
