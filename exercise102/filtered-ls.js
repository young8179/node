const fs = require("fs")
const path = require("path")

fs.readdir(process.argv[2], function callback(error, list){
    if(error){
        return console.log(error)
    }
    const ext = '.' + process.argv[3]
    for (let index = 2; index < list.length; index++) {
        const element = list[index];
        let string = list.toString()
        path.extname(list);
        if(result === ext)
            console.log(list);
        
    }
    
    
});