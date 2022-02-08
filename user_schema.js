
var express=require('express')
var mongoose=require('mongoose')

var user=new mongoose.Schema({
    name:{type:String},
    age:{type:String},
    password:{type:Number},
    role:{type:String,enum:["student","admin","teacher"]}
})
module.exports=mongoose.model('user',user)