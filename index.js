const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/register",(req,res)=>{
    const {name, email, password} = req.body;
    console.log({name, email, password});
    res.send({name, email, password});
});

app.get("/",(req,res)=>{
    res.send("Welcom to Hemant's world");
})

app.listen(5001,(req,res)=>{
    console.log("server is running");
})
