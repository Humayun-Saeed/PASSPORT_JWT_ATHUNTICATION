
var passport=require('passport')
var jwtstrategy=require('passport-jwt').Strategy
Extractjwt=require('passport-jwt').ExtractJwt
var auth=require('../controlers/authorization')
const user = require('../user_schema')
//secert_key="add"
var opts={};
opts.secretOrKey="add";
opts.jwtFromRequest=Extractjwt.fromAuthHeaderAsBearerToken();

passport.use(new jwtstrategy(opts,function(jwt_playload,done){
user.findOne({_id:jwt_playload.data._id},function(err,user){
    if(err){
        return done(err,false)
    }
    if(user){
        console.log(user)
        return done(null,user)
    }
    else{
return done(null,false)
    }
}
)

}))

