const asyncHandler = require("express-async-handler");
const Product = require("../models/productSchema");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

 const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.json({
      status: 404,
      message: "product not found",
    });
  }
});

module.exports= {getProducts,getProduct}