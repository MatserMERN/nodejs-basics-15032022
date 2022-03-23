const events = require("events")
const eventEmitter = new events.EventEmitter()

eventEmitter.on("FireEvent", function(data){
    console.log(`Event: ${data}`)
})

eventEmitter.emit("FireEvent", 'This is my first custom event' )
