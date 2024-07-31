
class Response{
    constructor(){
        
    }

   static success(message,code,data){

        return{
            success:true,
            message,
            data,
            code
        } 
    }
   static error(message,error=null,code=404){
        return{
            success:false,
            message,
            error,
            code

        }

    }

}

module.exports = Response
