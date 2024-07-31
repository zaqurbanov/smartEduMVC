const mongoose = require('mongoose');
class Mongo{

    constructor(){
        this.db = null
    }

    static connec = async (path)=>{

        try {
            console.log("Connecting");
            const connect = await mongoose.connect(path)
            this.db = connect;
            console.log("Connected");
            
        } catch (error) {
            
        }
    }
}

module.exports = Mongo