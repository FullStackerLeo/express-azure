// ./services/postService.js
const { Post } = require('../models/models');

exports.createPost = async (postData) => {
  const post = new Post(postData);
  return await post.save();
};

exports.getPostById = async (id) => {
  return await Post.findById(id).populate('author');
};

exports.updatePost = async (id, postData) => {
  return await Post.findByIdAndUpdate(id, postData, { new: true });
};

exports.deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};
