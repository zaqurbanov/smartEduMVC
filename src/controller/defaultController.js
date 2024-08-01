const aboutService = require('../services/aboutService')
const counterServices = require('../services/counterService')


const getDefaultPage = async(req,res)=>{
    const result = await aboutService.getAboutData()
    const userRole = req.userRole;
    let changedPage = null
    if(userRole=="admin") {
        changedPage = true
    
    }
    const counterData = await counterServices.getCounter()

    
    res.status(200).render('index',{
        pageName:"index",
        data:result.data,
        // counterData:counterData.data,
        changedPage
    })
  
} 

module.exports = {getDefaultPage} 