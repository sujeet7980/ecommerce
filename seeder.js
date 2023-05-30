const mongoose= require('mongoose');
const users= require('./data/User');
const products= require('./data/Products')
const User = require('./models/User');
const Product = require('./models/productSchema');
const Order = require('./models/Orderschema');
const dotenv= require('dotenv');
const mongodb= require('./config/config');
dotenv.config();
mongodb();
const importData = async ()=>{
    try{
      await User.deleteMany();
      await Product.deleteMany();
      await Order.deleteMany();
      const createUser=await User.insertMany(users);
      const adminUser= createUser[0]._id;
      const sampleData = products.map((product) => {
         return { ...product, user: adminUser };
      });
      await Product.insertMany(sampleData);
      console.log("data imported successfully!!");
      process.exit();
   }catch(error){
       console.log(error);
   }
}
const destroyData =async()=>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("data deleted  successfully!!");
        process.exit();
     }catch(error){
         console.log(error);
     }
}
if(process.argv[2]==='-d'){
    destroyData();
}
else {
    importData();
}