
const counterServices = require('../services/counterService')
const createCounter = async(req,res)=>{

        const {students,courses,years} = req.body;

        const data = {
            students,
            courses,
            years
        }
        const result = await counterServices.createCouter(data);
        if(!result.success){
            return res.status(400)
        }
        return res.status(200).redirect('/')

}

module.exports = {
    createCounter
}