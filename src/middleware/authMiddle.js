

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/envoirment');


const authMiddle = async(req,res,next)=>{

global.userIn = null
    try {
        const token  = req.cookies.authUser;
        
        if(!token){
               return  res.redirect('/');
        }
        const jwtverify = jwt.verify(token,JWT_SECRET)

        if(!jwtverify){
           return res.redirect('/');
        }
        global.userIn = token
        next();

    } catch (error) {
        
       return  res.redirect('/');
    }
    


}

module.exports = authMiddle