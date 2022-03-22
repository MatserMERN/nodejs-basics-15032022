const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const users = require('./user.json')

app.use(cors())

router.get("/", (req, res) => {
    res.json("Welcome to Node API")
})

router.get("/users", (req, res) => {
    res.json(users)
})

app.use('/api', router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})