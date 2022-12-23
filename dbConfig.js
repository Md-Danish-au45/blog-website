const mongoose = require("mongoose")

async function initDB(){
    try {
        await mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true})
        console.log("database is connected successfully")
        
    } catch (error) {
        console.log("error in db please check...!!!")
        
    }
}

module.exports = {initDB}