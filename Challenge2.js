//Write a single ES6 expression to take `'a=4,b=15,c=42'` and convert it into an object.
const string = 'a=4,b=15,c=42'
const object = {}
string.split(',').map(i => i.split('=')).forEach(([key, value]) => object[key] = Math.trunc(value))

console.log(object)