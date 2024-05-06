const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

app.get("/",(req,res)=>{
    res.send("Welcom to Hemant's world");
})

app.listen(5001,(req,res)=>{
    console.log("server is running");
})
