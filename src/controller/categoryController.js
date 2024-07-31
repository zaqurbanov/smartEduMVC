const categoryService = require('../services/categoryService')

const createCategory = async(req,res)=>{
    const {name} = req.body;

    const result = await categoryService.createCategory(name)

    if(!result.success){
      return  res.status(result.code).json({
        result
      })
    }

    return res.status(result.code).redirect('/')
}

const getAllCategory = async(req,res)=>{
    const result = await categoryService.getAllCategory();

    if(!result.success)
       return res.status(result.code).json({
            result
        })
        
      return  res.status(result.code).json({
          data:result.data
        })

}


module.exports = {
    createCategory,
    getAllCategory
} 