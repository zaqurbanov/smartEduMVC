
const courseService = require('../services/courseService');
const categoryService = require('../services/categoryService');
const userService = require('../services/userService')
const getCoursesPage = async(req,res)=>{
        const {category} = req.query
    
    const categories = await categoryService.getAllCategory();
 
    const categorySlug = await categoryService.getCategoryBySlug(category)
 
    let filter = {}
    if(categorySlug.success){
     
        filter = {category:categorySlug.data._id}
        
    }
 
    

    const result = await courseService.getCoursesPage(filter);
    
    
    if(result.success){
        res.status(result.code).render('courses',{
            datas:result.data,
            categories:categories.data,
            pageName:'courses'
            
        })

         
 
    }

}

const createCourse = async(req,res)=>{
    const datas = req.body
   const token = req.cookies.authUser;


   const decodeToken = await userService.getUserDecode(token);
    
   if(!decodeToken)
        return res.status(decodeToken.code).send("user decoded not found");

   const verifyUserEmail = decodeToken.data.email;

    const user = await userService.getUserByEmail(verifyUserEmail)
    const category = await categoryService.getCategoryByName(datas.category)
   
    const data = await courseService.createCourse(datas,user.data._id,category.data.id);
    

    

    if(!data.success)
        return   res.status(data.code).redirect('/dashboard')
 
        return res.status(data.code).json({
            data 
        }) 
}
const getCourseById = async(req,res)=>{ 
    const {id} = req.params;

    const result = await courseService.courseById(id);
    if(!result.success){
        return res.status(result.code).redirect('/')

    }

    return res.status(result.code).json({
        data:result.data,
        pageName:'courses'
    })
}

const getCourseBySlug = async(req,res)=>{
const {slug} = req.params
    const result = await courseService.getCourseBySlug(slug);
    if(!result.success){
        return res.status(result.code).redirect('/courses');
    }
    return res.status(result.code).render('course',{
        pageName:"courses",
        data:result.data

    })

}
 

module.exports = {
    
    getCoursesPage,
    createCourse,
    getCourseById,
    getCourseBySlug
};