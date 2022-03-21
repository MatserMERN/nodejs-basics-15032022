let log = {
    info : function(info){
        console.log(`info : ${info}`)
    },
    warn : function(warn){
        console.log(`warn : ${warn}`)
    },
    error : function(error){
        console.log(`error : ${error}`)
    },
}

module.exports = log
// module.exports = "Uma"
// module.exports = 1

module.exports.display = function(display){
    console.log(`display : ${display}`)
}