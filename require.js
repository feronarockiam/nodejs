var counter = require('./count');

console.log(counter.add(5,7));
console.log(counter.add(counter.pi,7));

console.log(counter.counte(['feron','rahul','ragul']));

var dir = require('os')

console.log(os.platform(),os.homedir());