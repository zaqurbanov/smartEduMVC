const Response = require("../config/Response")
const Course_Model = require("../Models/Course_Model")


const getCoursesPage = async(filter)=>{
    try {
        
        const data = await Course_Model.find(filter).populate('category').populate("author");
        
       return Response.success("successfully respons",200,data)
    } catch (error) {
     return Response.error(error.message)
    }
}
const createCourse = async (datas,user_id,category_id)=>{
    
    try {
      
        
            if(!datas.title || !datas.description || datas.title=="" || datas.description=="")
              return  Response.error("Please fullfield All request",null,401);

            const data = await Course_Model.create({
                title:datas.title,
                description2:datas.description2,
                description:datas.description,
                category:category_id,
                author:user_id
                 
            })
          return  Response.success("Created Succesfully",201,data)
        } catch (error) {
          return  Response.error(error)
        }
    
} 
const deleteCourse = async (id)=>{
    
    try {
        const deletedData = await Course_Model.findByIdAndDelete(id);
        if(!deletedData){
            return Response.error("Id not Found",null,402);
        }
        return Response.success("deleted Successfully",204,null)
        
        
    } catch (error) {
        Response.error("internal Server Error",error.message)
    }

}

const updateCourse = async(data,id)=>{

    try {
        const coursById = await Course_Model.findById(id);
        if(!coursById){
            return Response.error('Id not Found',null,402);
        }
        const title = data.title || coursById.title;
        const description = data.description || coursById.description;
 
     const updatedData=   await Course_Model.create({
            title,
            description
        })

        if(!updatedData){
            return Response.error("Updated Failed",null,401);
        }
        return Response.success("Updated Successfully",201,updatedData)


    } catch (error) {
        return Response.error("Internal Server Error",error,400)
    }
}
const courseById = async (id)=>{

    try {
        const result = await Course_Model.findById(id);
        
        if(!result){
            
            return Response.error("Id Not Found",null,400);
        }
       return  Response.success("successfully respons",200,result)
    } catch (error) {
        
       return  Response.error("Internal Server Error",error,400)
        
    }
}
const getCourseBySlug = async(slug)=>{
        try {
            
            const result = await Course_Model.findOne({slug});
            
            
            if(!result){ 
                return Response.error("Data not found",null,400);
            }
            return Response.success("Request successfully",200,result)
        } catch (error) {
          return  Response.error("Internal Server Error",error,404)
        }
}

const getCouerseByUser = async(author)=>{
try {
        const result = await Course_Model.find({author})

        if(!result){
            return Response.error("Course not found",null,400);
        }

        return Response.success("Data successfully",200,result)


} catch (error) {
    return  Response.error("Internal Server Error",error,404)
    
}

}


module.exports = {
    getCoursesPage,
    createCourse,
    deleteCourse,
    updateCourse,
    courseById,
    getCourseBySlug,
    getCouerseByUser
}


