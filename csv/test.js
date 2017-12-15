const fs = require('fs');


// console.log(fs.readFileSync('./file/products_SaaS.csv', 'UTF8').slice(0, 2))
const test = fs.readFileSync('./test.csv');
const saas = fs.readFileSync('./products_SaaS.csv');
console.log(test.length)
console.log(saas.length)

console.log( test.toString('utf8',2300,2400));
console.log( saas.toString('utf8',6352,6452));
// console.log(saas.toJSON())
