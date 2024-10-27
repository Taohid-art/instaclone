const jwt = require('jsonwebtoken');


const genareteToken =(user)=>{
return jwt.sign({email:user.email , id:user._id},"balerkey");

}
module.exports.genareteToken =genareteToken;