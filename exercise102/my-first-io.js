
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])

const str = contents.toString();
const split = str.split("\n");
const result = split.length - 1
console.log(result)

// const fs = require("fs")


// fs.readFileSync(process.argv[2], function(error, buffer){
    
//     const str = buffer.toString();
//     const split = str.split("\n")
    
        
    
//     console.log(split.length - 1)
    
// })