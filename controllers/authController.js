const {genareteToken} = require("../utils/genareteToken");
const bcrypt = require('bcrypt'); 
const userModel = require("../model/userModel")

module.exports.register = function (req,res){
  try {
      let {username,name,email,password} = req.body;
  
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,async (err,hash)=>{
      if(err)return err;
        // let userfind =await userModel.findOne({email,username})
        // // if(userfind) {res.send("u already have account")}else{
        const user = await userModel.create({
          username,
          name,
          password:hash,
          email
        });
        token = genareteToken(user);
       
        
        res.cookie("token",token);
        res.redirect("/profile");
      }) 
  })
  } catch (error) {
    res.send(err)
  }
  
  }



  // module.exports.loginUser = async function (req,res){
  //   let {username,password} = req.body;
  //   let userfind = await userModel.findOne({username})
  //   if(!userfind)return res.send("Username is incorrect");
  //   bcrypt.compare(password,userfind.password,(err,result)=>{
  //     if(result){
  //       res.redirect("/profile")
  //     }else{
  //       res.send("email or password incorrect");
  //     }
  //   })
  // }
