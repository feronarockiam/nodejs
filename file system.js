const fs = require('fs')

//read file

fs.readFile('./sample.txt', (err , data)=>{
    if (err)
    {
        console.log(err);
    }
    console.log(data);
});