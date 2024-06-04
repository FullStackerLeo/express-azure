// ./services/userService.js
const { User } = require('../models');

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
