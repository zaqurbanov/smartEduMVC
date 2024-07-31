

const getContactPage = async (req,res)=>{

    res.status(200).render('contact',{
        pageName:"contact"
    })

}

module.exports = {getContactPage}