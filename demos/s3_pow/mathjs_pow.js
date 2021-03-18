let math = require('mathjs');
let base = 2,
exp = 3,
n = math.pow(base,exp); // 8
 
console.log( math.log(n,base) ); // 3
console.log( math.log(n,base) === exp ) // true
