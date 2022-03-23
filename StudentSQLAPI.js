const express = require("express")
const app = express()
const router = express.Router()
const sql = require("mssql")
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const dbConfig = {
    user: 'sa',
    password: 'user@123',
    server: 'LAPTOP-GQVH23CD',
    database: 'studentdb',
    options: {
        trustServerCertificate: true
    }
}

sql.connect(dbConfig, (err)=>{
    if(err){
        throw err
    } else {
        console.log(`Connected to SQL Server Successfully`)
    }
})

router.get("/", (req, res) => {
    res.json("Welcome to NodeAPI using SQL Server")
})

router.get("/students", (req, res) => {
    const request = new sql.Request()
    const selectQuery = "SELECT * FROM student order by _id desc"
    request.query(selectQuery, (err, data) => {
        if(err){
            throw err
        }
        res.json(data.recordset)
    })
})

router.get("/students/:id", (req, res) => {
    const studentId = req.params.id
    const request = new sql.Request()
    let selectQueryById = `SELECT * FROM student WHERE _id=${studentId}`
    request.query(selectQueryById, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data.recordset)
    })
})

router.post("/students", (req, res)=> {
    console.log(req.body)
    const {name, email, city} = req.body
    const request = new sql.Request()
    const insertQuery = `INSERT INTO student (name, email, city) VALUES ('${name}', '${email}', '${city}')`
    request.query(insertQuery,  (err, data) => {
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/students/:id", (req, res) => {
    const studentId = req.params.id
    const {name, email, city} = req.body
    const request = new sql.Request()
    const updateQuery = `UPDATE student SET name ='${name}', email='${email}', city='${city}' WHERE _id = ${studentId}`
    console.log(updateQuery)
    request.query(updateQuery, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.delete("/students/:id", (req, res) => {
    const studentId = req.params.id
    const request = new sql.Request()
    const deleteQuery = `DELETE FROM student WHERE _id =${studentId}`
    request.query(deleteQuery, (err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})