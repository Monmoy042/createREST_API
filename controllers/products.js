const Product = require("../model/products");

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ products });
};

const getAllProductsTest = async (req, res) => {
  const products = await Product.find(req.query);
  console.log("getAllProductsTest~req.query", req.query);
  res.status(200).json({ products });
};

module.exports = { getAllProducts, getAllProductsTest };
