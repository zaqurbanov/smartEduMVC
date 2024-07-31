
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/envoirment');

const userInMiddle =async (req,res,next)=>{
    const token  = req.cookies.authUser;
    global.userIn = null
    try {
        if(token){
            const decodedToken = jwt.verify(token,JWT_SECRET)
            if(decodedToken){
                global.userIn = "tokenTrue"
            }
        }
        

    } catch (error) {
        
    }
    
    
next()

}

module.exports = userInMiddle