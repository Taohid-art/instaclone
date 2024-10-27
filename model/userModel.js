const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    name:String,
    email:String,
    password:String,
    bio:String,
    picture:{
        type:String,
        default:"def.png"
    },
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"postModel"
    }],
    follower:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    }]
}
);

module.exports = mongoose.model("user",userSchema)
