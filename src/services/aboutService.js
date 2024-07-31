const Response = require("../config/Response");
const About_Content_Model = require("../Models/About_Content_Model")

// const updateAboutService =  async(data)=>{


//     try {
//            const  update = await About_Content_Model.find({});

//     if(!update){

//         const createData = await About_Content_Model.create(data)
//         return Response.success("created New Data",201,createData)
//     }else{
//         const firstUpdate = update[0]._id;

//         const updatedData = await About_Content_Model.findByIdAndUpdate(firstUpdate,data);
//         return Response.success("created New Data",201,updatedData)
        
//     }
//     } catch (error) {
//         return Response.error("internal Server Error",error,400)
//     }
 


// }

const getAboutData =async ()=>{
    try {
        const result =await About_Content_Model.find({});

         
        if(!result) return Response.error("Data not Found",null,400);

     return   Response.success("data successfully",200,result[0]);
            
    } catch (error) {
        return Response.error("Internal server error",error,500)
    }
}

const updateAboutPage =async (data)=>{

 
    try {
            const result = await About_Content_Model.findByIdAndUpdate(data.id,data);
            console.log(result);
            if(!result){
                return Response.error("updated Course Failed",null,400)
            }

            return Response.success("data updated successfully",200,result)

    } catch (error) {
        return Response.error("Internal server error",error,500)

    }

}

module.exports = {getAboutData,updateAboutPage} 