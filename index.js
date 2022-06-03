// importing express library to create server
const express = require("express") 

const mongoose = require("mongoose")


const app = express()


app.get("/user", (req,res)=>{
    res.send( "First API call")
})

const port = 5000
app.listen(5000 , (req , res)=>{
    console.log(`Starting Application on port : http://localhost:${port}`)
})

const mongodbur1 ="mongodb+srv://sagargunjal2955:sagar@cluster0.7a5skea.mongodb.net/?retryWrites=true&w=majority" 
mongoose.connect(mongodbur1)
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
    console.log("not connected")
})
