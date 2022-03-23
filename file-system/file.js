 const fs = require('fs')
 const path = require('path')

const filePath = path.join(__dirname, "sample.txt")

fs.readFile(filePath, "UTF-8",  function(err, data){
    if(err){
        throw err
    }
    console.log(data)
})

// const fileData = fs.readFileSync("sample.txt", "UTF-8")
// console.log(fileData)

// fs.writeFile("sample.txt", "Hello World", function(err){
//     if(err){
//         throw err
//     }
// })

// fs.appendFile("sample.txt", "Add more data \n", function(err){
//     if(err){
//         throw err
//     } else {
//         console.log('append operation completed')
//     }
// })

// fs.unlink("sample.txt", ()=>console.log('Delete operation completed'))