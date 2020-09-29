const { throws } = require("assert");
const fs = require("fs")

fs.readFile(process.argv[2], function (error, buffer){
    if(error){
        throw error
    }
    let str = buffer.toString();
    let split = str.split("\n");
    let result = split.length - 1;
    console.log(result);
} )