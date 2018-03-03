let math = require('mathjs');

// getting base log
console.log(Math.log(8)); // 2.07...
console.log(Math.log(8,2)); // 2.07...


console.log(Math.log(8) / Math.log(2)); // 3

// with math.js this can be done by just giving
// a second argument

console.log(math.log(8,2)); // 3

// and of course it still works as it should when given just one argument
console.log(math.log(8)); // 2.07...
