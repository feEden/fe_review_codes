// main.js
const a = require('./a');
console.log('in main, a.a1 = %j, a.a2 = %j', a.a1, a.a2);

// a.js
exports.a1 = true;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.a2 = true;

// b.js
const a = require('./a.js');
console.log('in b, a.a1 = %j, a.a2 = %j', a.a1, a.a2);