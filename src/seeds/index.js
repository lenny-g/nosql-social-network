const mongoose = require("mongoose");

const userSeedData = require("./userSeedData");
const thoughtSeedData = require("./thoughtSeedData");

const { User, Thought } = require("../models");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");
    await User.deleteMany();
    const usersFromDb = await User.insertMany(userSeedData);

    console.log("[INFO]: Successfully seeded users");

    await Thought.deleteMany();
    const thoughtsFromDb = await Thought.insertMany(thoughtSeedData);

    console.log("[INFO]: Successfully seeded thoughts");

    // seed thoughts for users
    const allthoughts = thoughtsFromDb.map(async (thought) => {
      const username = thought.username;

      const user = usersFromDb.find((user) => user.username === username);

      user.thoughts.push(thought._id.toString());

      await User.findByIdAndUpdate(user._id, { ...user });
    });
    await Promise.all(allthoughts);

    const friendsPromise = usersFromDb.map(async (user) => {
      const userName = user.username;
      const allUsers = usersFromDb.filter(
        (currentUser) => currentUser.username != userName
      );

      const randomFriend =
        usersFromDb[Math.floor(Math.random() * allUsers.length)];

      user.friends.push(randomFriend._id);

      await User.findByIdAndUpdate(user._id, { ...user });
    });

    await Promise.all(friendsPromise);

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
