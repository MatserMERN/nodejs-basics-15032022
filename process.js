//console.log(process)
console.log(process.execPath)
console.log(process.pid)
console.log(process.cwd())
console.log(process.env.USERDOMAIN)
console.log(process.env.USERNAME)
console.log(process.env.USERPROFILE)

const PORT = 1234

process.env.PORT = PORT
console.log(process.env.PORT)