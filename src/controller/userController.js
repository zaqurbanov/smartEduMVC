const userService = require('../services/userService');
const cookieParser = require('cookie-parser');


const getUserSignUpPage =async (req,res)=>{
    res.status(200).render('signup',{
        pageName:'signup'
    })

}

const getLoginPage = async(req,res)=>{
    const errorMsg = req.cookies.error_msg
    const successMsg = req.cookies.success_msg
    
    res.status(200).render('login',{ 
        pageName:'login',
        errorMsg:errorMsg,
        successMsg:successMsg

    })
}
const signUpUser = async(req,res)=>{
    const {name,password,email} = req.body;

    const infoUserObj = {
        name,
        password,
        email
    }

    const result = await userService.signUpUser(infoUserObj);

    if(!result.success){
     return   res.status(result.code).redirect('/user/signup')
    };
return res.status(result.code).redirect('/user/login')


} 


const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    const result = await userService.loginUser(email,password);
    
    if(!result.success){
        res.cookie('error_msg',result.message,{maxAge:5000})
        return  res.status(result.code).redirect('/user/login')
    }
    res.cookie("authUser",result.data,{httpOnly:true,maxAge:60*60*1000})    
    res.cookie("success_msg",result.message,{maxAge:5000})
      return  res.status(result.code).redirect('/courses')
    
}

const logoutUser = async(req,res) =>{
    res.clearCookie('authUser');
    res.redirect('/')

} 

const getAllUser = async(req,res)=>{

    const result = await userService.getAllUser();
    if(!result.success){
        return res.status(result.code).redirect('/dashboard')
    }

}
module.exports = {
    signUpUser,
    getUserSignUpPage,
    getLoginPage,
    loginUser,
    logoutUser,
    getAllUser
}