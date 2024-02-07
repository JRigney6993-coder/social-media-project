const fs = require('fs');

setTimeout(()=>{
    console.log("Timer is done");
}, 1000)

console.log("This has started");


fs.readFile("text.txt", "utf8", function(err, data){
    console.log(data)
})