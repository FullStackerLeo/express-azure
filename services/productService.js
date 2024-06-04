// ./services/productService.js
const { Product } = require('../models');

exports.createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};

exports.updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
