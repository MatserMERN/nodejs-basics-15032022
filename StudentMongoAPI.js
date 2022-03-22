const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/studentdb", (err) => {
    if(err){
        throw err
    } else {
        console.log('connected to mongodb successfully !!!')
    }
})

router.get("/", (req, res) => {
    res.json("NodeJS API using MongoDB")
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})