var express=require('express')
var mongoose=require('mongoose')
var user=require('../user_schema')
const jwt=require('jsonwebtoken')
var auth=require('./authorization')
//const { attachment } = require('express/lib/response')

module.exports.add_user=(req,res)=>{
const add=new user()
add.name=req.body.name
add.age=req.body.age
add.password=req.body.password
add.role=req.body.role
add.save().then((value) => {
    res.send("your account is generated: "+value)
})
.catch((err) => {
console.log(err);    
})

}
module.exports.sign_user=async(req,res)=>{

const data= await user.findOne({name:req.body.name})

if(!data){
    res.send("plzz sign in again: ") 
}
else{
    res.send(await auth.create_token(data))
}


}
module.exports.user_seeder=(req,res)=>{

    res.send("well come to the user panel: ")
}