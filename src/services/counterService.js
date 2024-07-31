const Response = require("../config/Response")
const Counter_Model = require("../Models/Counter_Model")

const createCouter =async (data)=>{

    try {
        
        await Counter_Model.deleteMany({})
         const createData = await Counter_Model.create(data)
         if(!createData){
            return Response.error("Created Failed",null,400)
         }
         
         return Response.success("Created Successfully",200,createData)
    } catch (error) {
        return Response.error("Created Failed",error,400)
        
    }

}

const getCounter = async()=>{
    try {
        const result = await Counter_Model.find({})

        if(!result){
            return Response.error("Server Error",null,400)
        }

        return Response.success("successfully recived data",200,result)
    } catch (error) {
    Response.error("Internal Server Error",error,404)        
    }
}


module.exports = {
    createCouter,
    getCounter
}