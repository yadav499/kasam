const mongoose = require("mongoose");

const connectDB = ()=>{
    try {
        mongoose.connect("mongodb+srv://yadavhemantkumar30:uzQMcnccKcMjTAzV@cluster0.vugalmy.mongodb.net/zeromale");
        console.log("database connected successfully");
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB;