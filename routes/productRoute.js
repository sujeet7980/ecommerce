const express = require("express");
const {getProducts,getProduct} =require('../controllers/productController')
const router = express.Router();
router.route('/products').get(getProducts);
router.route('/product/:id').get(getProduct);
module.exports = router;
