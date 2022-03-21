const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send('<h1>Welcome to ExpressJS APIs</h1>')
})

app.get("/user", function(req, res){
    res.send('<h1>Welcome to user API</h1>')
})

app.get("/employee", function(req, res){
    res.send('<h1>Welcome to employee API</h1>')
})

app.get("/*", function(req, res){
    console.log(req.url)
    res.send('<h1>Please contact Adminitrator</h1>')
})

const PORT  = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})