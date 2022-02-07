const { Router } = require("express");

const users = require("./users");
const thoughts = require("./thoughts");
const reactions = require("./reactions");

const router = Router();

router.use("/users", users);
router.use("/thoughts", thoughts);
router.use("/reactions", reactions);

module.exports = router;
