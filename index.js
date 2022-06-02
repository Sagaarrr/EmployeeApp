// importing express library to create server
const express = require("express") 

const app = express()

app.get("/user", (req,res)=>{
    res.send( "First API call")
})

const port = 5000
app.listen(5000 , (req , res)=>{
    console.log(`Starting Application on port : http://localhost:${port}`)
})
