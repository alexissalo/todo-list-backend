const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");
const postTasks=require("./postTasks")
const getTasks=require("./getTasks")
const deleteTasks=require("./deleteTasks")
const editTasks=require("./editTasks")

module.exports = {
  register,
  login,
  getUserById,
  postTasks,
  getTasks,
  deleteTasks,
  editTasks,
};