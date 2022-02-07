const connection = require("../config/connection");

const userSeedData = require("./userSeedData.json");
const ThoughtSeedData = require("./thoughtSeedData.json");

const { User, Thought } = require("../models");

const seedDatabase = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  const users = await User.bulkCreate(userSeedData);
  console.log("\n----- USERS SEEDED-----\n");

  const blogs = await Thought.bulkCreate(blogSeedData);
  console.log("\n----- BLOGS SEEDED -----\n");

  process.exit(0);
};

// Step 1 seed all users

// Step 2 seed all thoughts

// Step 3 get all users from DB

// Step 4 map through the thoughts and link each thought the specific user (get the username of the thought and find the user object in users from DB and get _id of that user)
// once you get _id of user, insert the thought _id in to the thoughts array of the user
