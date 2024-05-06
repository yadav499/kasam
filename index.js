const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userModel = require("./models/userModel");
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.post("/register",async(req,res)=>{
    const {name, email, password} = req.body;
    const user = new userModel({name, email, password});
    await user.save();
    return res.status(200).send({
        success:true,
        message:"registered successfully",
        user
    })
});

app.get("/",(req,res)=>{
    res.send("Welcom to Hemant's world");
})

app.listen(5001,(req,res)=>{
    console.log("server is running");
})
