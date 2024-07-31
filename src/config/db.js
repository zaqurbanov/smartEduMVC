const mongoose = require('mongoose');

class Mongo {
    


    static  connect = async(Path)=>{


        try {
            console.log("Connecting...");
            await mongoose.connect(Path)
    
            console.log("Connected");
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = Mongo