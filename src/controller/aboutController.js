
const aboutService = require('../services/aboutService')




const getAboutPage = async(req,res)=>{

    const userRole = req.userRole;
    const aboutData = await aboutService.getAboutData();
    
    if(!aboutData.success){
     return   res.json({
            message:"salam"
        })
    } 

    

    let isChangedPage = null;
    if(userRole=="admin")  isChangedPage = true
    

    
   return res.status(200).render("about",{
        pageName:"about",
        changedPage:isChangedPage,
        data:aboutData.data
    })

}
const updateAboutPage = async(req,res)=>{

        const {aboutHeader,aboutTag,aboutHead1,aboutHead2,aboutBody1,aboutBody2,aboutlink1,aboutLink2,id} = req.body
    const data = {
        id,
        aboutHeader,
        aboutTag,
        aboutHead1,
        aboutHead2,
        aboutBody1,
        aboutBody2,
        aboutlink1,
        aboutLink2
    }

     await aboutService.updateAboutPage(data)
   return  res.redirect('/about')


}
// const createAboutData = async(req,res)=>{

//     const {aboutHeader,aboutTag,aboutHead1,aboutHead2,aboutBody1,aboutBody2,aboutlink1,aboutLink2} = req.body
//     const data = {
//         aboutHeader,
//         aboutTag,
//         aboutHead1,
//         aboutHead2,
//         aboutBody1,
//         aboutBody2,
//         aboutlink1,
//         aboutLink2
//     }


//     try {
//            const result = await About_Content_Model.create(data)
//      
//     res.redirect('/about') 
//     } catch (error) {
//         
//     }

// }

module.exports = {getAboutPage,updateAboutPage} 