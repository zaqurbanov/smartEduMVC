
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/envoirment');
const userService = require("../services/userService")
const adminMiddleware = async(req,res,next)=>{
    const token = req.cookies.authUser;

        try {

        if(!token)
            return res.redirect('/dashboard')

        const decodeToken = jwt.verify(token,JWT_SECRET);
            if(!decodeToken)
                return res.redirect('/dashboard')

            const user = await userService.getUserByEmail(decodeToken.email)
            if(user.data.userRole.name !=="admin")
                return res.redirect('/dashboard')

                    
                 next()
            

        } catch (error) {
            return res.redirect('/')
        }

}

module.exports = adminMiddleware