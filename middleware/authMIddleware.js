const jwt=require('jsonwebtoken')
const User = require('../models/UserModel')
const asyncHandler = require("express-async-handler");
const protect = asyncHandler ( async (req,res,next)=>{
    // console.log(req.headers.authorization)
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
          
             token =req.headers.authorization.split(' ')[1];
            const decode= jwt.verify(token,process.env.JWT_KEY);
            req.user= await User.findById(decode.id).select('-password');
            next();
        }
        catch(error){
             res.status(404);
             throw new Error('User not found with this token');
        }
    }
    if(!token) {
        res.status(401);
        throw new Error('Not authorised or incorrect token');
    }
})

module.exports={protect}