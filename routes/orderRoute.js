const express = require("express");
const {protect} =require('../middleware/authMIddleware')
const {addOrderItem,getOrderById,updateOrderToPaid,getMyOrderList}= require('../controllers/orderController')
const router = express.Router();
router.route('/').post(protect,addOrderItem).get(protect,getMyOrderList);
router.route('/:id').get(protect,getOrderById);
router.route('/:id/pay').put(protect,updateOrderToPaid);
module.exports = router;
