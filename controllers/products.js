const Product = require("../model/products");

const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  res.status(200).json({ myData });
};

const getAllProductsTest = async (req, res) => {
  const myData = await Product.find({});
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTest };
