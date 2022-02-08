var express=require('express')
var mongoose=require('mongoose')
var jwt=require('jsonwebtoken')
 secert_key="add"

module.exports.create_token=async(data)=>{
   

return await jwt.sign({data},secert_key,{expiresIn:'50000000s'})

}
module.exports.check_role=(roles)=>{

return (req,res,next)=>{

    if(roles.includes(req.user.role)){
        
        next()
    }
    else{
        res.send("Not Authorized: ")
    }
}

}