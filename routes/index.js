var express = require("express");
var router = express.Router();
const userModel = require("../model/userModel");
const postModel = require("../model/postModel");
const storyModel = require("../model/storyModel");
const jwt = require("jsonwebtoken");
const upload = require("./multer");
const {register} = require("../controllers/authController")
const utils = require("../utils/utils");




// GET
router.get("/", function (req, res) {
  res.render("index", { footer: false });
});

router.get("/login", function (req, res) {
  res.render("login", { footer: false });
});
router.post("/register",register)



router.get("/profile",async function(req,res){
  try {const decoded = jwt.verify(req.cookies.token ,"balerkey"); 
  let user = await userModel.findOne({email:decoded.email });
  
  res.render("profile",{footer:false, user})
    
  } catch (error) {
    res.send(err)
  }
 
})

module.exports = router;
