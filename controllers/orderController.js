const asyncHandler = require("express-async-handler");
const Order = require("../models/Orderschema");

// const getProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({});
//   res.json(products);
// });

const addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
 if(orderItems && orderItems.length ===0){
    res.status(400);
    throw new Error('No order found');
   return;
 }else{
    const order = new Order({
    user : req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
 }
  
});
const getOrderById=asyncHandler( async (req,res)=>{
   const order = await Order.findById(req.params.id).populate("user","name email");
   if(order){
      res.status(200).json(order);
   }
   else{
    res.status(404);
    throw new Error("Order Not Found");
   }
})
const updateOrderToPaid = asyncHandler(async(req,res)=>{
   // console.log(req.body);
   // console.log(req.params.id)
   const order = await Order.findById(req.params.id);
   if(order){
      (order.isPaid=true),
      (order.paidAt=Date.now()),
      (order.paymentResult={
         id: req.body.id,
         status: req.body.status,
         update_time: req.body.update_time,
         email_address:req.body.payer.email_address
      })
     const updateOrder = await order.save();
   res.json(updateOrder);
   } else {
      res.status(404);
      throw new Error("order not found");
   }
});


const getMyOrderList=asyncHandler(async(req,res)=>{
   const orders = await Order.find({user:req.user.id});
   res.json(orders);
})
module.exports = { addOrderItem ,getOrderById,updateOrderToPaid,getMyOrderList};
