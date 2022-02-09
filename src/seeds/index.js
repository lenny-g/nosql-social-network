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
    await User.insertMany(userSeedData);

    console.log("[INFO]: Successfully seeded users");

    await Thought.deleteMany();
    await Thought.insertMany(thoughtSeedData);
    console.log(thoughtSeedData);

    console.log("[INFO]: Successfully seeded thoughts");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();

// Step 1 seed all users

// Step 2 seed all thoughts

// Step 3 get all users from DB

// Step 4 map through the thoughts and link each thought the specific user (get the username of the thought and find the user object in users from DB and get _id of that user)
// once you get _id of user, insert the thought _id in to the thoughts array of the user
