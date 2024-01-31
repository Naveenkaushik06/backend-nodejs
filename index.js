require('dotenv').config()
const express = require("express")
const app = express()
const port = 4000

app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/twitter",(req,res)=>{
    res.send("twitter.com.....")
})
app.get("/login", (req,res)=>{
    res.send(`<h1>login successful</h1>`)
})
app.listen(process.env.PORT, ()=> console.log(`server started at ${port}`))
