//Importing express library to create server
const express = require("express")

const mongoose = require("mongoose")



const app = express()

app.get("/user", (req, res) =>{
    res.send("Fetch API Call")
})
const port = 5500

app.listen(port,(req,res) =>{
    console.log(`Starting application on port : http://localhost: ${port}`)
})

const mongodburl = "mongodb+srv://sagargunjal2955:sagar2955@cluster0.7a5skea.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongodburl)
.then(()=>{
    console.log("DB Connected!!")
})
.catch((err)=>{
    console.log(err)
})

