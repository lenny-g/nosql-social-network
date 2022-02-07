const { User } = require("../../models");

const getUsers = async (req, res) => {
  res.send("getUsers");
};

const getUserById = async (req, res) => {
  res.send("getUsersById");
};

const createUser = (req, res) => {
  res.send("createUser");
};

const updateUserById = (req, res) => {
  res.send("updateUserById");
};

const deleteUserById = (req, res) => {
  res.send("deleteUserById");
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
