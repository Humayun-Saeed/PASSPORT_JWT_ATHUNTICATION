var express=require('express')
var mongoose=require('mongoose')
var user=require('./routes/user')
var passport=require('passport')


var app=express()
require('./middleware/middleware')
app.use(passport.initialize())
app.use(express.json())
mongoose.connect('mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to the database successfully: ");
})
.catch((err)=>{
    console.log(err);
})

app.use('/',user)

app.listen(3000,()=>{
    console.log("server is runnig at this port: ");
})
