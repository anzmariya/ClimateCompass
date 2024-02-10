const admins = require("../Models/adminModel");

exports.loginControl=async(req,res)=>{
    console.log('inside login function');
    // res.status(200).json('login request received')
    const{email,password}=req.body
    try{
        const existingUser=await admins.findOne({email,password})


        res.status(200).json(existingUser)
     
       
    }
    catch(err){
        res.status(401).json('login request failed due to : ',err)
    }
}