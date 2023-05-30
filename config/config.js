const mongoose = require('mongoose');
 
const mongodb = async ()=>{
    try{
      const conn= await  mongoose.connect(process.env.MONGO_DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log(`mongodb connected to  ${conn.connection.host} successfully`)
    }
    catch(error){
         console.log(error);
    }
}
module.exports = mongodb;
 